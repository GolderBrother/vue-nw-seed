if exist releases {
    rd /s/q releases
}
mkdir releases && node build/build.js
pause
