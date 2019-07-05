This guide will help you to install ESRGAN on Windows, by showing you step by step with images how to do it.

No knowledge of Python or coding is necessary to follow this guide. 

If you have any problems during or after the installation, feel free to ask any questions on our [Discord server](https://discord.gg/SxvYsgE) and we will try to help you out. 

Our goal is to open up A.I. upscaling to everyone, not just to those who can pay lots of money or are good at coding.

Before you start, make sure that your **driver is up-to-date** if you have an **Nvidia GPU**, to make sure it supports the newest cuda version. If you want to be on the save site, use the [cuda driver](https://developer.nvidia.com/cuda-downloads).

## Installing ESRGAN

1. Get the latest stable 64-bit Python 3 release here: [Python Download](https://www.python.org/downloads/windows/)
![1-python-link](https://github.com/alsa64/AI-wiki/raw/master/res/1-python-link.jpg)
2. Run the installer and make sure that `Add Python 3.*x* to Path` and `Install launcher for all users (recommended)` is selected, then click on Customize installation.
![1-python-link](https://github.com/alsa64/AI-wiki/raw/master/res/2-installer-1.jpg)
3. Make sure that every Option is selected and click on next.
![1-python-link](https://github.com/alsa64/AI-wiki/raw/master/res/3-installer-2.jpg)
4. Mirror my selections and click on install (Make sure that the install location contains no spaces).
![1-python-link](https://github.com/alsa64/AI-wiki/raw/master/res/4-installer-3.jpg)
5. You have now successfully installed Python 3. Click on Close now.
6. Press <Windows/Super key> + R. Enter `cmd` and click on `OK`
![6-run](https://github.com/alsa64/AI-wiki/raw/master/res/6-run.jpg)
7. We will now install Pytorch:
    1. If you have a **Nvidia** graphic card enter the following command in the cmd:
    ```bash
    pip install https://download.pytorch.org/whl/cu100/torch-1.1.0-cp37-cp37m-win_amd64.whl
    ```
    then:
    ```bash
    pip install https://download.pytorch.org/whl/cu100/torchvision-0.3.0-cp37-cp37m-win_amd64.whl
    ```
    ![cmd-NV](https://github.com/alsa64/AI-wiki/raw/master/res/7-Nvidia.jpg)
    2. If you have an **AMD / Intel** graphic card enter the following command in the cmd:
    ```bash
    pip install https://download.pytorch.org/whl/cpu/torch-1.1.0-cp37-cp37m-win_amd64.whl
    ```
    then:
    ```bash
    pip install https://download.pytorch.org/whl/cpu/torchvision-0.3.0-cp37-cp37m-win_amd64.whl
    ```
    ![cmd-CPU](https://github.com/alsa64/AI-wiki/raw/master/res/7-CPU.jpg)
    3. If the command won't work for you, please report it and get a new one in the meantime here [Pytorch Website](https://pytorch.org/get-started/locally/). Select Stable, Windows, Pip, your Python version and your cuda version (should be the newest) or None for AMD / Intel users.
8. Press Enter.
9. Now we install the other requirements for running and training ESRGAN and SFTGAN. Enter:
```bash
pip install opencv-python
```
![cmd-others](https://github.com/alsa64/AI-wiki/raw/master/res/8-pip.jpg)

10. Choose a folder where you want to install ESRGAN. Because of the maximum path length limitation in windows, I recommend something as short as possible like: `C:\ctp\esrgan\`
    1. Create a folder called `ctp` (That will come in handy if you want to install Deorders scripts later)
    2. In the `ctp` folder create a folder called `esrgan`
    3. Open the `esrgan` folder.
11. Now it is time to download ESRGAN:
    1. Go to [the ESRGAN GitHub Repo (old model structure)](https://github.com/xinntao/ESRGAN/tree/aceb85730832001ec1fa3a77bd6856b75e1d0e87)
    2. Click on `Clone or Download`
    3. Click on `Download ZIP`
![cmd-CPU](https://github.com/alsa64/AI-wiki/raw/master/res/10-github.jpg)
12. Extract the contents of the folder into your `C:\ctp\esrgan` folder you created in step 10. It should already be open and look like this:
![cmd-CPU](https://github.com/alsa64/AI-wiki/raw/master/res/11-explorer.jpg)
13. Now it is time to download and install the default ESRGAN models:
    1. Go to the [ESRGAN Pretrained Models Google Drive](https://drive.google.com/drive/folders/17VYV_SoZZesU6mbxz2dMAIccSSlqLecY)
    2. Download the two `_old_arch.pth` files.
    3. Put the two `.pth` files that you have just downloaded into your `models` folder in your `esrgan` folder 
        1. For example in: 
        ```
        C:\ctp\esrgan\models\
        ```
14. If you have a Nvidia Graphic Card, then you have successfully installed ESRGAN, congratulations!
15. But If you have an AMD / Intel Graphic Card then open `test.py` in your ESRGAN folder with a text editor.
    
    1. Change:

    ```python
    device = torch.device('cuda') # if you want to run on CPU, change 'cuda' -> cpu
    ```
    into
    ```python
    device = torch.device('cpu') # if you want to run on CPU, change 'cuda' -> cpu
    ```
