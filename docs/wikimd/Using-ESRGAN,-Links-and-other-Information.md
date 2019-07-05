## Using ESRGAN to upscale images
Now that you have installed ESRGAN you can upscale images. There are a few different ways of using ESRGAN. Below I will document the official one. This should work for everyone, but there are a few different applications designed to make the life of the users easier as well as to prevent comman pitfals of using ESRGAN.

### Things you need to know before you use ESRGAN

- ESRGAN supports only RGB images, that means it will remove alpha / transparency channels if present and it won't work with grayscale images.

- ESRGAN is limited by the amount of VRAM you have.

**But** there are ways around both. At the time of writing this there are two main tools used to solve this:

1. Deorder's scripts: 
   - They require **Bash** and **imagemagick**, both of which are available for **Windows, Linux and MacOS**, on Windows you can use [git bash](https://git-scm.com/downloads), [msys2](https://www.msys2.org/) or [Cygwin](https://cygwin.com/). There are others, but those are the main options.
   - They run from a bash terminal. That makes them harder to use for many people who never used a CLI (command line interface) tool, but allow for an incredible automation potential as well as being usable for a lot of other Neural Networks aside from ESRGAN / BasicSR.
   - **Don’t** use [WSL](https://en.wikipedia.org/wiki/Windows_Subsystem_for_Linux) (Windows Subsystem for Linux) if you run ESRGAN on a **NVIDIA** GPU since WSL **doesn’t support GPU acceleration**, which makes it unable to run ESRGAN in CUDA mode.
2. Crop-Upscale-Merge
   - **Windows only** for now. (Linux support is being worked on by the author, there is a branch on GitHub, if you want to try to build it yourself)
   - **Easy** to use **GUI** which makes it easy to use for users who don't love CLI yet :P .
   - Has a **lot of advanced options** available wihtout the need to write any scripts.
   -  Because it isn't scriptable, it is basically a less powerful version of Deorder's scripts, but it has a GUI and is nice and easy to use.
   -  Image splitting is less limited than with Deorder's scripts.
   -  [PrincessPotato / Kartoffel made a Guide for it that includes installation instructions for ESRGAN](https://www.youtube.com/watch?v=fWQGRN5CiA0)

## The official Way (ESRGAN only)

1. Put the pictures or textures you want to upscale into the `LR` folder.
2. If you want to use a model with a scale other than 4, you need to edit the test.py file. Just open it with your text editor and change the scale to the one from your model. The scale of each model is documented on our wiki. If you want to run an artifact removal model, like my jpg model for example change `scale=4` to `scale=1`.
3. Open a terminal window and navigate to the `esrgan` folder. 
    - For Windows Shift right click in your `esrgan` folder and select `Open PowerShell window here`. For some users it might say `Command Line` instead, if that is the case for you click on that and procced.
    - For Linux / MacOS users the process is similar. File managers like Nautilus for example allow you to open a terminal in a folder. If that isn't an option for you can can also navigate using commands. `cd` allows you to navigate and `pwd` shows you the current folder. `cd ..` goes one directory down (for example from `/home/combi/code/git/ctp` to `/home/combi/code/git`). Use `cd /path/to/whatever` to navigate to absolute (full) paths or `cd some-foder-in-the-current-folder` to navigate to a folder in the current open folder. (`pwd` = print working directory; cd = change directory) If you want to find out more about a command you can just type `man the command-you-want-to-know-about` or use the internet.
4. Enter:
    1. On Windows:
    ```bash
    python test.py models/<theModelYouWantToUse>.pth
    ```
    1. On Linux:
    ```bash
    python test.py models/<theModelYouWantToUse>.pth
    ```

5. Don't enter `<theModelYouWantToUse>.pth` Instead replace that with the name of a model of course.
As an example, for the default model it would be: `python test.py models/RRDB_ESRGAN_x4.pth`
5. That was it, the results will be in the `results` folder.

## Tips when using ESRGAN

1. When upscaling **compressed textures** use a 1x decompression model for the format first and or downscale them first by at least 50% with `nearest neighbor` or `box` filtering first, before upscaling them in ESRGAN.
2. ESRGAN runs **much** faster on Nvidia GPUs, you can compile pytorch youself for AMD GPUs but at the moment that is quite difficult to do.
4. If you **run out of VRAM**, use **Deorder’s scripts**, which will split the texture in smaller parts first.
5. If you have textures in subfolders, use Deorder’s scripts, they fully support subfolders.
6. If your textures contain an alpha channel (transparency), use Deorder’s scripts, split and recombine the color and alpha channels.
7. Try out different models. On our GitHub you will find a lot of different Models, that we trained our self.
8. If you are still not happy with the results despite having tried out different models, consider training your own and sharing it with us later.

## Additional Information

- Linux: 
**Consider Linux for all Neural Networks**, especially if you are on Windows, to get a noticable speed boost, almost all Neural Networks including ESRGAN / BasicSR were made with Linux in mind. The speed boost is especially noticable when training and / or when using Deorder's scripts.
    - There are a lot of different Linux Distributions, you can choose any of them, if you decide to go that route:
        - **I recommend [Arch Linux](https://www.archlinux.org/)** unlike most other Distributions it allows you to completely customize your installation, but requires a lot of time and patience, there is a nice written guide on it's wiki. The main advantage beside the possible customization is that arch has no *version* it is a rolling release, which means as soon as there is an update you will get it, that includes the Linux kernel and drivers, so you might have a better time on arch based distributions than on others.
        - If you don't have time or patience to install it the hard way, [Antergos](https://antergos.com/) or [Manjaro](https://manjaro.org/) are also a good options that are based on arch.
        - Finally, while I don’t like it, many people use [Ubuntu](https://www.ubuntu.com/), many tools where made on that distribution, mainly because so many people use it, but despite that you might have a harder time there, especially with installing the NVIDIA driver and CUDA.

- Windows:
    - When upscaling extremely large images (approximately 1000x1000px) on Windows 10, it's possible for the operating system to kill the ESRGAN process if it takes too long. This can be fixed using the Nvidia Nsight Monitor app that is installed alongside the CUDA toolkit. Instructions for doing so are available [here](https://docs.nvidia.com/gameworks/content/developertools/desktop/timeout_detection_recovery.htm).