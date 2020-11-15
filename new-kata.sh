code .
mkdir "$1"
cd "$1"
touch "$1.js" "$1.test.js" "README.md"
echo "(Kata Link)[https://www.codewars.com/kata/$2]" > README.md