code .
snake=$(echo $1 | tr '[:upper:]' '[:lower:]' | tr -s ' ' | tr ' ' '-')
mkdir $snake
cd $snake
touch "$snake.js" "$snake.test.js" "README.md"
echo "[Codewars link](https://www.codewars.com/kata/$2)" > README.md
cd ..
echo "- [$1](https://github.com/VlatkoStojkoski/code-katas/tree/main/$snake)" >> README.md
echo "  _$(date)_" >> README.md