There are a lot of different neural networks, in fact there are new ones every day. But here is a *small* list of important ones:

# Upscalers:

### ESRGAN (free)

[ESRGAN](https://github.com/xinntao/ESRGAN) is currently one of the best tools to upscale any texture. There are multiple models beside the default one, if you want to try one of those look in `#esrgan-model-links` on our Discord server. With a custom model it can outperform more or less any other tool out there currently.

If you want to **train ESRGAN** head [here](https://github.com/xinntao/BasicSR). It also contains code for testing.

**Note:** To prepare Datasets for training [Deorder's texture-upscale scripts](https://github.com/deorder/texture-upscaler) are recommended.



### SFTGAN (free)

[SFTGAN](https://github.com/xinntao/SFTGAN) is from the same developers as ESRGAN. It works by separating an image into different sections before it upscales. Feel free to try it.

If you want to **train SFTGAN** head [here](https://github.com/xinntao/BasicSR). It also contains code for testing. 

**Note:** There might be a few things missing for segmentation training.



### waifu2x (free)
[waifu2x](https://github.com/nagadomi/waifu2x), [with GUI](https://github.com/lltcggie/waifu2x-caffe) isn't as good in my opinion, ESRGAN and A.I. Gigapixel both upscale better than all models from waifu2x in my experience. It also noise and jpg artifact cleaning.



### Gigapixel AI (non free)
[Gigapixel AI](https://topazlabs.com/gigapixel-ai/) formerly A.I. Gigapixel is a commercial product from topazlabs and unlike ESRGAN or waifu2x costs money. It doesn't reach ESRGAN's results in upscaling if you use a custom model, but it works quite well on photos and skin and is easy to use. It was made with photos and not textures in mind. It tends to be somewhat grainy, but allows control over deblurring and denoising.


# Image artifact Cleaning and improvement:
### ESRGAN again (free)
[ESRGAN](https://github.com/xinntao/ESRGAN) again is currently one of the best tools to clean any texture. There are multiple models for that, if you want to try one of those look in `#esrgan-model-links` on our Discord server.

If you want to **train ESRGAN** head [here](https://github.com/xinntao/BasicSR). It also contains code for testing.

**Note:** To prepare Datasets for training [Deorder's texture-upscale scripts](https://github.com/deorder/texture-upscaler) are recommended. The `train.py` must also be slightly modified to train 1x models.

### Sharpen AI (non free)
[Sharpen AI](https://topazlabs.com/sharpen-ai/) is another tool from topazlabs, there is also `DeNoise AI` and `JPG to RAW AI`, but the later two don't work well for textures in my experience. I am not the biggest fan of Sharpen AI, but a lot of people like it.

