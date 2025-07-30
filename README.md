Run and build app

```
npx tailwindcss -i ./assets/tailwind.css -o ./css/site.css --watch
```

Converting images:

```
mogrify -path ~/Downloads/convert/ -format avif -resize 1920x1920\> ~/Downloads/convert/*.HEIC
mogrify -path ~/Downloads/convert/ -format avif -resize 1920x1920\> ~/Downloads/convert/*.JPG
magick mogrify -path ~/Downloads/convert/ -format jpg -quality 85 ~/Downloads/convert/*.avif
```
