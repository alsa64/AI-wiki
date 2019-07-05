# ESRGAN Models

## Upscaling - Drawings 

|Name|Author|Scale|License|Purpose|Iterations|Batch Size|HR Size|Epoch|Dataset Size|Dataset|Pretrained Model|
|----|------|-----|-------|-------|----------|----------|-------|-----|------------|-------|----------------|
|[Manga109Attempt](http://www.mediafire.com/file/w3jujtm752hvdj1/Manga109Attempt.pth.zip/file)|kingdomakrillic|4||Manga|?|4|?|?|100|Manga109|RRDB_PSNR_x4|
|[Falcon Fanart](https://drive.google.com/open?id=1bqyG9llxkJ6i6MJTaNUiSgSXtrlPi0d7)|LyonHrt|4||Manga|125,000|8|128|?|3393|Falcon Fanart|RRDB_PSNR_x4|
|[Comic Book](https://drive.google.com/open?id=1qjpxp8z4FGLZxieUDEVKd6FDum-8vpvJ)|LyonHrt|4||Comic / Drawings|115,000|8|128|592|1548|Custom (Spiderman)|none|
|[ad_test_tf](https://www41.zippyshare.com/v/PVqPgXNB/file.html)|PRAGMA|4||Cartoon / Netflix|5,000|16|128|?|30000|Custom (American Dad)|PSNRx4|
|[De-Toon](https://drive.google.com/open?id=1uJvdx3g3GEY0VxMnHb0ItBvoc6pmGvuH)|LyonHrt|4||Toon Shading / Sprite|225,000|8|128|525|7,117|Custom Toon-style photos|RRDB_PSNR_x4|

### Description

Manga109Attempt is slightly blurry, but performs well as a general upscaler as LyonHrt said: 
> "I think it just has the right balance, a bit of paper grain some realism and bold colors it’s the closest your going to get to all purpose"

Falcon Fanart tries to improve upon it with the goal of removing checkerboard patterns / and dithering. It has oil colour based shading with sharp lines.

The Comic Book model was trained using stills from the film spiderman into the spiderverse, has a comic book crosshatch shading effect to the images. [Sample](https://cdn.discordapp.com/attachments/547950274313191425/564427623204388864/6de7c88f.png)

The ad_test_tf model was designed for upscaling American Dad NTSC DVD frames (originally at 480p) to match the quality and style of Netflix's equivalent 1080p WEB-DL, which includes a slight desaturation of colors.

De-Toon, is a model that does the opposite of tooning an image. It takes toon style shading and detail, and attempts to make it realistic. Its very sensitive, and can be used on small sprites, to large images. Also included is a alt version, which is less sharp.

## Upscaling - Realistic (photos, prerendered 3D, etc)
|Name|Author|Scale|License|Purpose|Iterations|Batch Size|HR Size|Epoch|Dataset Size|Dataset|Pretrained Model|
|----|------|-----|-------|-------|----------|----------|-------|-----|------------|-------|----------------|
|[4xBox](https://drive.google.com/file/d/1KToK9mOz05wgxeMaWj9XFLOE4cnvo40D/view?usp=sharing)|buildist|4|GPLv3|Realstic|390,000|8|192|268|11,577|Flickr2K+Div2K+OST|PSNR model from same data|

### Description
4xBox was meant to be an improvement on the RRDB_ESRGAN_x4 model ([comparison](https://imgsli.com/NDEwMw)). It's also trained on photos, but with a much larger dataset which was downscaled with linear interpolation (box filter) instead of bicubic.

## Upscaling - Characters and Faces 

|Name|Author|Scale|License|Purpose|Iterations|Batch Size|HR Size|Epoch|Dataset Size|Dataset|Pretrained Model|
|----|------|-----|-------|-------|----------|----------|-------|-----|------------|-------|----------------|
|[Trixie](https://drive.google.com/file/d/1HIBRKFs7s-XhpN1p7rwAWcMTHwFRqn3n/view)|LyonHrt|4||Star Wars|275,000|8|192|87|19,814|?|None|
|[Face Focus](https://drive.google.com/open?id=19ICMKNuS4PbhmtA7Be9lUE6v8NHDDEzP)|LyonHrt|4||Face De-blur|275,000|8|192|455|4,157|Faces|RRDB_PSNR_x4|

### Description
Trixie was made to bring balance to the force... Also to upscale **character textures for star wars games**, including the heroes, rebels, sith and imperial. Plus a few main aliens...Why called trixie? Because jar jars big adventure would be too long of a name...This also provides good upscale for **face textures for general purpose as well as basic star wars** textures.

The Face Focus modes was designed for **slightly out of focus / blurred images of faces**. It is aimed at **faces** / **hair**, but it can help to **improve other out of focused images too** as always just try it.

## Upscaling - Specialized

|Name|Author|Scale|License|Purpose|Iterations|Batch Size|HR Size|Epoch|Dataset Size|Dataset|Pretrained Model|
|----|------|-----|-------|-------|----------|----------|-------|-----|------------|-------|----------------|
|[Map](https://drive.google.com/open?id=1xPzqzTG5L6y5I0U3W0oQjexwGF5zfG32)|LyonHrt|4||Map / Old Paper with text|120,000|8|192|361|2311|Custom(Scans)|none|
|[Forest](https://drive.google.com/open?id=12fR-pWw6YL2ZbS6EDvrAeOVoQHWkWl5L)|LyonHrt|4||Wood / Leaves|160,000|8|192|590|2.2K|Custom(?)|none|
|[Ground](https://drive.google.com/file/d/1dGmhHUPmb3lO9buX_Bt2nq97Nk5MCTb4/view)|ZaphodBreeblebox|4||Ground Textures|305,000|?|128|?|?|Custom (Ground textures Google)|?|
|[Misc](https://mega.nz/#!KmpAXaJb!MoWN4XArM9n1xZEyeyS9Tt9yQkYcDvbZIszHTNzfZlo)|alsa64|4|GNU GPLv3|Surface Textures|220,000|32|128|338|20,797|Custom (Photos)|[Manga109Attempt](http://www.mediafire.com/file/w3jujtm752hvdj1/Manga109Attempt.pth.zip/file)|
|[Armory](https://mega.nz/#!bmBg2KaD!4BbOLPoY2dLbMywmrfPN4f0CvSU3D7aAFq_KbQPeJMo)|alsa64|4|GNU GPLv3|Armor, Clothes and Weapons|80,000|26|128|2,600|800|Skyrim Mod textures|[Manga109Attempt](http://www.mediafire.com/file/w3jujtm752hvdj1/Manga109Attempt.pth.zip/file)|
|[Wood](https://drive.google.com/file/d/1waC7a63nh5qkrLQe95sMcN4HRpaqhD9r/view)|Laeris|4||Wood|75,000|?|?|?|?|?|?|
|[Skyrim Diffuse](https://drive.google.com/file/d/1RjVWNUFtVyz4ykqu6Pm9wmO03pPEBGqg/view)|Deorder|4||Skyrim Difuse Textures|105,000|?|128|?|?|Skyrim Diffuse Textures|?|
|[Xbrz](https://drive.google.com/open?id=1LFd4BqZ2N8p21JzjLX6hGdm7RpVIkH7s)|LyonHrt|4||Xbrz style pixel art upscaler|90,000|8|128|368|1897|custom xbrz up-scaled|RRDB_PSNR_x4|
|[ScaleNX](https://drive.google.com/open?id=1jE2le5Lsab-AcMUMm0Zr9L-OvFNhnRAG)|LyonHrt|4||Scalenx style pixel art upscaler|80,000|8|128|599|1,070|custom scalenx up-scaled from retroarch shader|RRDB_PSNR_x4|
|[Xbrz+DD](https://drive.google.com/open?id=1VDbjRii9zyyUhyqnQd5H8OP8d3AuwjTe)|LyonHrt|4||Xbrz style pixel art upscaler with de-dithering|90,000|8|128|470|1,523|custom de-dithered xbrz|xbrz|
### Description

The map model was trained on **maps, old documents, papers and various styles of typefaces/fonts**. Based on a dataset contributed by alsa64. [Sample](https://imgsli.com/MzMwNw)

The Forest model is focused on **trees, leaves, bark and stone** can be used for double upscaling for even more detail. [Sample](https://imgsli.com/MzI2Nw)

The Ground model was trained on various pictures of **stones, dirt and grass** using Google's image search.

The Misc model is trained on various pictures shoot by myself, including **bricks, stone, dirt, grass, plants, wook, bark, metal** and a few others.

The Armory model was trained with **modded textures form Skyrim**, including **Clothing, Armor and Weapons**. (**Leather, Canvas and Metal** should all work - maybe too sharp so interpolate)

The wood model was trained for Skyrim by Laeris.

The Skyrim Diffuse models is supposed to be used with Skyrim's diffuse textures. It is a bit too sharp so I recommend to interpolating with the RDDB_ESRGAN_x4 model or the mangaAttempt109 model, look in [Deorder's Skyrim Model Google Drive](https://drive.google.com/drive/folders/1m1sgHiSZkmI4NbiXeBEZasf94WPqEsNF) for an already interpolated version.

## Normal Map Upscaling

|Name|Author|Scale|License|Purpose|Iterations|Batch Size|HR Size|Epoch|Dataset Size|Dataset|Pretrained Model|
|----|------|-----|-------|-------|----------|----------|-------|-----|------------|-------|----------------|
|[Normal Maps](https://mega.nz/#!Sq52DIQD!v01R93hb8Je0_8aaXLiZwKzOslDv7-FEri5_FW7H-Pw)|alsa64|4|GNU GPLv3|Normal Maps|36,000|27|128|?|?|Custom (Normal Maps)|[Normal Maps - Skyrim artifacted](https://drive.google.com/file/d/14eWzh-AG6BsXX3tSiPgfQKs_zPHDOwI7/view)|
|[Normal Maps - Skyrim artifacted](https://drive.google.com/file/d/14eWzh-AG6BsXX3tSiPgfQKs_zPHDOwI7/view)|Deorder|4||Skyrim Normal Maps|145,000|?|128|?|?|Skyrim Normal Maps|?|

### Description

The first one is based on the second one it was trained, with a higher learning rate and insane n_workers and batch_size values. It is meant to replace the old Normal Map model from Deorder, but without adding BC1 compression to your normal maps.

The second one was trained on Skyrim's Normal Maps, including compression artifacts, so it will have to be redone.

## Grayscale Upscaling

|Name|Author|Scale|License|Purpose|Iterations|Batch Size|HR Size|Epoch|Dataset Size|Dataset|Pretrained Model|
|----|------|-----|-------|-------|----------|----------|-------|-----|------------|-------|----------------|
|[Skyrim Alpha](https://drive.google.com/file/d/1trYs4AuC9s2JWAbryHdNyy5cgYV-V8cH/view)|Deorder|4||Alpha Channel|105,000|?|128|?|?|Alpha Channels from Skyrim|?|

### Description

Trained to upscale grayscale images, like specular or alpha etc.

## Artifact Removal

|Name|Author|Scale|License|Purpose|Iterations|Batch Size|HR Size|Epoch|Dataset Size|Dataset|Pretrained Model|
|----|------|-----|-------|-------|----------|----------|-------|-----|------------|-------|----------------|
|[BC1 take 1](https://mega.nz/#!emAAQa6B!xItl6e7WIyq1ZbXXWtLaKn7M2it7j8Rx_-wvxDjWdQQ)|alsa64|1|GNU GPLv3|BC1 Compression|100,000|2|128|111|1,800|Custom (Photos)|Failed Attempts|
|[BC1 take 2](https://mega.nz/#!r2hEAAAb!zdk-Ka6VCqVnKThtfJVYM0NnVBSUyeqsjYs-NgKjLkc)|alsa64|1|GNU GPLv3|BC1 Compression|260,850|2|128|106|4,7K|Custom (Photos / Manga)|[JPG (0-20%)](https://mega.nz/#!7io2gSQR!UB9u2k51daixTgC2H0LdOWzNlkDyIDHwxBX4BVY2J3k)|
|[BC1 take 3 Noise Aggressive](https://mega.nz/#!qjYGXahZ!_y98olCWVgRXFZkApNv2Pfm7SrLGm4oC-_gEC7UYZAo)|alsa64|1|GNU GPLv3|BC1 Compression|400,000|2|128|26|28,985|Custom (just about everything)|[BC1 take 2](https://mega.nz/#!r2hEAAAb!zdk-Ka6VCqVnKThtfJVYM0NnVBSUyeqsjYs-NgKjLkc)
|[JPG (0-20%)](https://mega.nz/#!7io2gSQR!UB9u2k51daixTgC2H0LdOWzNlkDyIDHwxBX4BVY2J3k)|alsa64|1|GNU GPLv3|JPG compressed Images|178,178|2|128|52|6230|Custom (Photos / Manga)|[JPG (20-40%)](https://mega.nz/#!OzpFHYAD!0swA_J18bSygyVgMHac3P4kkBx6ZYUHNnL9qXhiu-9I)|
|[JPG (20-40%)](https://mega.nz/#!OzpFHYAD!0swA_J18bSygyVgMHac3P4kkBx6ZYUHNnL9qXhiu-9I)|alsa64|1|GNU GPLv3|JPG compressed Images|140,798|2|128|42|6230|Custom (Photos / Manga)|[JPG (40-60%)](https://mega.nz/#!Kr5Q1C7C!yq4910SjvAyMS_40IhrOsShA21OXdP8rxfiMsEuYbW8)|
|[JPG (40-60%)](https://mega.nz/#!Kr5Q1C7C!yq4910SjvAyMS_40IhrOsShA21OXdP8rxfiMsEuYbW8)|alsa64|1|GNU GPLv3|JPG compressed Images|100,000|2|128|31|~6.5K|Custom (Photos / Manga)|[JPG (60-80%)](https://mega.nz/#!6j4RRQBD!3CX7XN9ZEAeWR3aXBAsDRpxSfKbM8zR1N9GXgbP38Ig)|
|[JPG (60-80%)](https://mega.nz/#!6j4RRQBD!3CX7XN9ZEAeWR3aXBAsDRpxSfKbM8zR1N9GXgbP38Ig)|alsa64|1|GNU GPLv3|JPG compressed Images|91,000|2|128|27|~6.5K|Custom (Photos / Manga)|[JPG (80-100%)](https://mega.nz/#!2uxwRYYT!2KgAsRac70jqYYXyOvQ5HSd4ipoqC0WGB4Md2Su_OM8)|
|[JPG (80-100%)](https://mega.nz/#!2uxwRYYT!2KgAsRac70jqYYXyOvQ5HSd4ipoqC0WGB4Md2Su_OM8)|alsa64|1|GNU GPLv3|JPG compressed Images|162,000|2|128|51|~6.5K|Custom (Photos / Manga)|[BC1 take 1](https://mega.nz/#!emAAQa6B!xItl6e7WIyq1ZbXXWtLaKn7M2it7j8Rx_-wvxDjWdQQ)|
|[JPG PlusULTRA](https://de-next.owncube.com/index.php/s/jetoMQkKNLfRkYY)|twittman|1||JPG compressed Images|130,000|1|?|150|937|Custom (Manga)|Failed Attempts|
|[Cinepak](https://de-next.owncube.com/index.php/s/wKjLmYsq7M5JAmx)|twittman|1||Cinepak, msvideo1 and Roq|200,000|1|128|21|~8K|Custom (Manga)|none|
|[DeDither](https://mega.nz/#!2jA1lY4D!HIrqgTbJt2AyQ12vKXLaNqZXIPnQrG4TfCJ7wesiEz0)|alsa64|1|GNU GPLv3|Dithered Images|126,900|2|128|53|4,700|Custom (Photos / Manga)|[JPG (0-20%)](https://mega.nz/#!7io2gSQR!UB9u2k51daixTgC2H0LdOWzNlkDyIDHwxBX4BVY2J3k)|
|[dither_4x_flickr2k_esrgan, dither_4x_flickr2k_psnr](https://drive.google.com/file/d/1CRauqU0NDM40c1mafvoJnj6IV30YhAou/view)|buildist|4||Ordered dithering|280,000|16|128|?|2640, ~8k|Flickr2K, OST dithered with GIMP|none|
|[DeSharpen](https://mega.nz/#!qRZD3SLL!RqP7cISIcoW5YakPya9CXEWSEHWqUSKdWLQSdYKGa14)|loinne|1||Oversharpened Images|310,000|1|128|48|~3K|Custom (?)|Failed Attempts|
|[AntiAliasing](https://de-next.owncube.com/index.php/s/mmYCcK4H3rQQR5Y)|twittman|1||Images with pixelated edges|200,000|1|128|440|656|Custom (?)|none|

### Description

Models to remove compression artifacts. 

The **BC1 take 2 model is better than my first BC1 model (BC1 take 1)**, It also might improve edges and tone differences between before and after somewhat. The Dataset was based on the JPG dataset, slightly balanced to contain less manga styled images. Note that BC1 compression is also used for the RGB channel in BC3. BC1=DXT1, BC3=DXT5. Do not use any of them for uncompressed textures.

JPG gets compressed witch a Quality Percentage between 0 and 100. So depending on how bad your JPEGs are compressed, choose the model of your choice. You can use [ImageMagick](https://imagemagick.org/index.php) to guess the Quality percentage, but keep in mind that it might be wrong, since the image might have been resaved.

The Cinepak model removes movie compressions artifacts from older video compression methods like Cinepak, msvideo1 and Roq.

Dithering is an older compression method, where the amount of color gets reduced, if your image has few colors or banding try the Dedither model.

Ordered dithering is a less common form of dithering that results in distinctive checkerboard/crosshatch patterns, which are misinterpreted as texture by models not trained on it. It's often used on GIFs because the pattern is stable between frames. For the 4x model, start with the ESRGAN model, and interpolate with the PSNR model if the result is too sharp.

The DeSharpen model was made for rare particular cases when the image was destroyed by applying noise, i.e. game textures or any badly exported photos. If your image does not have any oversharpening, it won't hurt them, leaving as is. In theory, this model knows when to activate and when to skip, also can successfully remove artifacts if only some parts of the image are oversharpened, for example in image consisting of several combined images, 1 of them with sharpen noise. It is made to remove sharpen noise, particulary made with Photoshop "sharpen" or "sharpen more" filters OR Imagemagick's -sharpen directive with several varying parameters of Radius and Sigma, from subtle 0.3x0.5 to something extreme like 8x2, somewhere about that.

AntiAliasing is for smoothing jagged edges in images and textures.

## Others

|Name|Author|Scale|License|Purpose|Iterations|Batch Size|HR Size|Epoch|Dataset Size|Dataset|Pretrained Model|
|----|------|-----|-------|-------|----------|----------|-------|-----|------------|-------|----------------|
|[normal generator](https://drive.google.com/file/d/1uksv1uyyZjQcU4567OrfU0w2NECcG8dY/view)|LyonHrt|1||Difuse to Normal|215,000|1|128|45|4,536|Custom (?)|none|

### Description

The model was trained on pairs of diffuse textures and normal maps.

## Other Sources:

[Cartoon Painted Models](https://esrgan.blogspot.com/2019/01)

## License:

[GNU GLPv3](https://github.com/alsa64/AI-wiki/blob/master/LICENSE):
- You can't sell the model under that license
- If you modify, interpolate or use the model as a pretrained model for your own model and share results of your resulting model, it will have to be under the same license, meaning that you can't sell it.
- You have to state that you used the model and its author for your results.
- You have to state any changes you made to the model.
- There are other points, but those are the main ones.

In addition to that all models by:
- alsa/alsa64 

have the following additional restriction:
- You can't sell results generated with a model using that license.