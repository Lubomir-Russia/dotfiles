#!/bin/bash
mv ~/.bashrc ~/.bashrc_original_backup
ln -nfs ~/bin/dotfiles/bashrc/bashrc ~/.bashrc
mv ~/.screenrc ~/.screenrc_original_backup
ln -nfs ~/bin/dotfiles/screen/screenrc ~/.screenrc
mv ~/.vimrc ~/.vimrc_original_backup
ln -nfs ~/bin/dotfiles/vim/vimrc ~/.vimrc
ln -nfs ~/bin/dotfiles/vim ~/.vim
mkdir -p ~/.bak/swap
