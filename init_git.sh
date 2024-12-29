set -e

rm -rf .git
git init && git add .
git config user.name "Batchor"
git config user.email "batchfy@gmail.com"
git commit -m 'init'

git remote add origin git@github.com:batchfy/primitives
git push -u origin main -f
