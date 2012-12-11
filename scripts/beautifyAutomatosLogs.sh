#!/bin/bash
#
# This is a simple bash script that allows to colourise Automatos console log 
# using sed. It also makes the log more consize by removing date and hour from 
# each line.
#
# Based on colour script of Michael Scarpa
# http://www.scarpa.name/2011/03/21/the-wonderful-world-of-colour/
#

black="0;30"
red="0;31"
green="0;32"
brown="0;33"
blue="0;34"
purple="0;35"
cyan="0;36"
lgrey="0;37"
grey="1;30"
lred="1;31"
lgreen="1;32"
yellow="1;33"
lblue="1;34"
lpurple="1;35"
lcyan="1;36"
white="1;37"

# Read every line separately from stdin, in order to preserve line breaks.
# Otherwise they disappear somewhere between sed and echo.  Also, use the -e
# flag on echo to make sure the control characters for colouring are evaluated
# properly.
# We need to "reset" IFS to make sure that 'read' does not remove leading
# spaces.
IFS=
read input
while [ $? -eq 0 ] ; do
    echo -e `echo $input | sed -ru "
        s/^[^:]+://;
        s/\s+\[/ [/;
        s/\s+>\s+/ | /;
        s/PRE_SET\]/& /;
        s/TC_STEP\]/& /;
        s/WARN\]/&    /;
        s/INFO\]/&    /;
        s/DEBUG\]/&   /;
        s/FAIL\]/&    /;
        s/PASS\]/&    /;
        s/.*\[TC_START\].*/\\\\\033[${green}m&\\\\\033[0m/;
        s/.*\[TC_STEP\].*/\\\\\033[${blue}m&\\\\\033[0m/;
        s/.*\[WARN\].*/\\\\\033[${red}m&\\\\\033[0m/;
        s/.*\[FAIL\].*/\\\\\033[${lred}m&\\\\\033[0m/;
        s/.*\[PASS\].*/\\\\\033[${lgreen}m&\\\\\033[0m/;
        "`
    read input
done

# At this point the exit status is still 1, because the last call to read
# failed.  But if we get this far, we want to exit with exit status 0, because
# everything went fine, and we want to use this tool also in make files, so we
# explicitly exit with code 0 here.
exit 0
