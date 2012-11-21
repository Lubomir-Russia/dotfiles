#!/bin/bash
timestamp=`date -d "today" +"%Y-%m-%d_%H:%M"`

[ -e ~/.vimrc ] && mv ~/.vimrc ~/.vimrc_-_$timestamp.backup
ln -nfs ~/bin/dotfiles/vim/vimrc ~/.vimrc && echo "Link vimrc - Ok."
ln -nfs ~/bin/dotfiles/vim ~/.vim

[ -e ~/.bashrc ] && mv ~/.bashrc ~/.bashrc_-_$timestamp.backup
ln -nfs ~/bin/dotfiles/bashrc/bashrc ~/.bashrc && echo "Link bashrc - Ok."

[ -e ~/.screenrc ] && mv ~/.screenrc ~/.screenrc_-_$timestamp.backup
ln -nfs ~/bin/dotfiles/screen/screenrc ~/.screenrc && echo "Link screenrc - Ok."

[ -e ~/.myviminfo ] && mv ~/.myviminfo ~/.myviminfo_-_$timestamp.backup
ln -nfs ~/bin/dotfiles/vim/myviminfo ~/.myviminfo && echo "Link myviminfo - Ok."

mv ~/.gitconfig ~/.gitconfig_original_backup
[ -e ~/.gitconfig ] && mv ~/.gitconfig ~/.gitconfig_-_$timestamp.backup
cp ~/bin/dotfiles/tips/gitconfig.example ~/.gitconfig && echo "Copy gitconfig - Ok."

# -p, --parents no error if existing, make parent directories as needed
mkdir -p ~/.bak/vim       && echo "Make dir ~/.bak/vim - Ok"
mkdir -p ~/.bak/swap      && echo "Make dir ~/.bak/swap - Ok"
mkdir -p ~/.bak/undofiles && echo "Make dir ~/.bak/undofiles - Ok"


# Use it for testing the script.
# [ -e ~/.mytest ] && mv ~/.mytest ~/.mytest_-_$timestamp.backup
# ln -nfs ~/bin/dotfiles/mytest ~/.mytest
