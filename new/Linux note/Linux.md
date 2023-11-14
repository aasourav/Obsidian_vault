Certainly! Here’s a table for **Obsidian Note** based on the information from the image:

|**Shortcut**|**Result**|
|---|---|
|`cd`|Changes the working directory to your home directory.|
|`cd -`|Changes the working directory to the previous working directory.|
|`cd ~"user_name"`|Changes the working directory to the home directory of `user_name`. For example, typing `cd "~bob"` will change the directory to the home directory of user “bob”.|

# `ls` most used options
|**Short Option**|**Long Option**|**Description**|
|---|---|---|
|-a|--all|List all files, even those with names that begin with a period, which are normally not listed (that is, hidden).|
|-A|--almost-all|Like the -a option except it does not list . (current directory) and .. (parent directory).|
|-d|--directory|Ordinarily, if a directory is specified, ls will list the contents of the directory, not the directory itself. Use this option in conjunction with the -l option to see details about the directory rather than its contents.|
|-F|--classify| This option will append an indicator character to the end of each listed name. For example, it will append a forward slash (/) if the name is a directory.|
|-h|--human-readable|long format listings, display file sizes in humanreadable format rather than in bytes.|
|-l||Display results in long format.|
|-r|--reverse|display the results in reverse order. Normally, ls displays its results in ascending alphabetical order.|
|-S||Sort results by file size.|
|-t||Sort by modification time.|

## `ls -l` format
|***Field***|***Meaning***|
|---|---|
|-rw-r--r-|Access rights to the file. The first character indicates the type of file. Among the different types, a leading dash means a regular file, while a d indicates a directory. The next three characters are the access rights for the file’s owner, the next three are for members of the file’s group, and the final three are for everyone else. Chapter 9 discusses the full meaning of this in more detail|
|1|File’s number of hard links. See “Symbolic Links” on page 21 and “Hard Links” on page 22.|
|root|the username of file owner|
