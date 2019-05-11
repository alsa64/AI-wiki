# A.I. Upscaling on Windows 10 by alsa64

This tutorial will help you to install ESRGAN on Windows 10, by showing you step by step with images how to do it. (It will probably work just fine on other windows versions, but it was only tested on windows 10)
No knowledge of Python / coding / Windows is necessary to follow this tutorial. If you have any problems during or after the installation feel free to ask any questions in our Discord (https://discord.gg/SxvYsgE) and we will try to help you out. 
Our goal is to open up A.I. upscaling to everyone not just to those who can pay lots of money or are good at coding.

### Installing ESRGAN

    1. Get the latest 64-bit Python 3 release here: https://www.python.org/downloads/windows/
    2. Run the installer and make sure that Add Python 3.X to Path is selected, then click on Customize installation.
    3. Make sure that every Option is selected and click on next.
    4. Mirror my selections and click on install (Make sure that the install location contains no spaces).
    5. You have now successfully installed Python3. Click on Close now.
    6. Press <Windows/Super key> + R. Enter “cmd” and click on “OK”
    7. We will now install Pytorch:
        1. If you have a Nvidia graphic card enter the following command in the cmd:
```bash
pip install https://download.pytorch.org/whl/cu100/torch-1.0.1-cp37-cp37m-win_amd64.whl
```
        2. If you have an AMD / Intel graphic card enter the following command in the cmd:
```bash
pip install https://download.pytorch.org/whl/cpu/torch-1.0.1-cp37-cp37m-win_amd64.whl
```
    8. Press Enter.
    9. Now we install the other requirements for running and training ESRGAN and SFTGAN. Enter:
```bash
pip install numpy opencv-python lmdb tensorboardX
```
    10. Choose a folder where you want to install ESRGAN. I recommend something short like in C:\ctp\esrgan\
        1. Create a folder called “ctp” (To make installing Deorder’s scripts later easier)
        2. In ctp\ create a folder called “esrgan”
        3. Open the esrgan\ folder.
    11. Now it is time to download ESRGAN
        1. Go to https://github.com/xinntao/ESRGAN
        2. Click on `Clone or Download`
        3. Click on `Download ZIP`
    12. Extract the contents of the folder into your C:\ctp\esrgan\ folder you created in step 10. It should look like this
    13. Now it is time to download and install the default ESRGAN models:
        1. Go to: https://drive.google.com/drive/folders/17VYV_SoZZesU6mbxz2dMAIccSSlqLecY
        2. Download both files.
        3. Put the two `.pth` files that you have just downloaded into your models\ folder in your esrgan\ folder 
            1. for example: 
            ```
            C:\ctp\esrgan\models\
            ```
    14. If you have a Nvidia Graphic Card, then you have successfully installed ESRGAN
    15. If you have an AMD / Intel Graphic Card then open `test.py` in your ESRGAN folder with a text editor.
        1. Change 
        ```python
        device = torch.device('cuda') # if you want to run on CPU, change 'cuda' -> cpu
        ```
        to
        ```python
        device = torch.device('cpu') # if you want to run on CPU, change 'cuda' -> cpu
        ```



### Using ESRGAN to upscale images
Now that you have installed ESRGAN you can upscale images:
    1. Put the pictures/textures you want to upscale into the LR\ folder.
    2. Shift right click in your esrgan\ folder and select “Open PowerShell window here” 
For some users it might say Command Line instead if that is the case for you open it and procced
    3. Enter: “python test.py models/<the name of the model you which to use>”
As an example, for the default model it would be: “python test.py models/RRDB_ESRGAN_x4.pth”
    4. The results will be in the results\ folder (For example: C:\ctp\esrgan\results)
##### Tips when using ESRGAN
    1. When upscaling compressed textures always downscale them first by 50% with nearest neighbor first, before upscaling them in ESRGAN.
    2. ESRGAN runs much faster on Nvidia GPUs
    3. Consider Linux to get a small speed boost, most A.I. tools on GitHub were made with Linux in mind.
    4. If you run out of VRAM, use Deorder’s scripts, which will split the texture in smaller parts first.
    5. If you have textures in subfolders, use Deorder’s scripts, they fully support subfolders.
    6. If your textures contain an Alpha channel (transparency), use Deorder’s scripts, split and recombine the color and alpha channels.
    7. Try out different Models. On our GitHub you will find a lot of different Models, that we trained our self.
    8. If you are still not happy with the results despite having tried out different models, consider training your own and sharing it with us later.
### Useful Links
    • Deorders scripts: https://github.com/deorder/ctp-texture-upscaler
        ◦ Deorder’s scripts make using ESRGAN a lot more convenient. 
        ◦ They require bash. To use Bash on windows, you can use msys2 (that is what I use), but git bash or Cygwin might also work.
        ◦ Don’t use WSL (Windows Subsystem for Linux) if you run ESRGAN on a Nvidia GPU since WSL doesn’t support GPU acceleration, which makes it unable to run ESRGAN in Cuda mode.
    • Linux: There are a lot of different Linux Distributions, you can choose whatever one you want, if you decide to go that route. I prefer Arch Linux, if you can’t be bothered to install it the hard way, Manjaro is also a good option. And finally, while I don’t like it, many people do Ubuntu, many tools where made on that distribution so you might have an easier time there. 
