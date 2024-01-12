// ALL YOUR CODE SHOULD BE HERE
// DO NOT EDIT THE OTHER FILES
import net from "node:net";

const PROXY_PORT = 3031;
const REMOTE_SERVER_PORT = 3032;

let previousData = "";
const searchString = "i like big trains and i cant lie";

const filterString = (data) => data.toString("utf-8").replace(/\n/g, "");

const filterFinalString = (data) => {
  const regex = new RegExp(searchString, "g");
  return data.replace(/ {2,}/g, " ").replace(regex, (match) => {
    return match.replace(/[^ ]/g, "-");
  });
};

const proxyServer = net.createServer(async (proxySocket) => {
  console.log("Proxy connected");
  const remoteServerSocket = net.createConnection(
    REMOTE_SERVER_PORT,
    "localhost",
    () => {
      console.log("Connected to remote server");
      remoteServerSocket.write("a");
    }
  );

  remoteServerSocket.on("data", (data) => {
    const isShouldIHaveToAddSpace = searchString
      .split(" ")
      .find((myData) => myData === filterString(data).split(" ")[0]);

    if (previousData) {
      const currentStringWithAddSpace = isShouldIHaveToAddSpace
        ? " " + filterString(data)
        : filterString(data);
      let finalString = previousData + currentStringWithAddSpace;
      const outputString = filterFinalString(finalString);
      proxySocket.write(
        outputString.substring(0, previousData.length).trimStart() + "\n"
      );

      previousData = outputString.substring(
        previousData.length,
        outputString.length
      );
    } else {
      previousData = data.toString("utf-8").replace(/\n/g, "");
    }
  });

  proxySocket.on("end", () => {
    console.log("Proxy disconnected");
    remoteServerSocket.end();
  });

  remoteServerSocket.on("end", () => {
    console.log("Remote server disconnected");
    proxySocket.end();
  });

  remoteServerSocket.on("error", (err) => {
    console.error("Error connecting to remote server:", err);
    proxySocket.end();
  });

  proxySocket.on("error", (err) => {
    console.error("Error with proxy connection:", err);
    remoteServerSocket.end();
  });
});

proxyServer.on("error", (err) => {
  console.error("Proxy server error:", err);
});

proxyServer.listen(PROXY_PORT, () => {
  console.log(`Proxy server listening on localhost:${PROXY_PORT}`);
});
