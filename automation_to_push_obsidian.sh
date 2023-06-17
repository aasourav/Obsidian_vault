path="/home/aasourav/Documents"

cd "$path" || exit 1

git add .
git commit -m "$(date +'%Y-%m-%d')"
git push origin main

