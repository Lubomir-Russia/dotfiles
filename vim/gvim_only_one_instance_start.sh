#!/bin/bash
gnome-terminal -e "gvim -geom 125x43 --servername FILES --remote-silent-tab $*"
