yarn prettier . --write
git init
git add .
git commit -m "Uploaded with upload.sh"
git branch -M main
git commit -m "Removed node_modules"
git remote add origin https://github.com/thepython555/DumosGameMaker.git
git push -f origin main