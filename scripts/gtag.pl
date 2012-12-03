#!/usr/bin/perl

use strict;
use warnings;
use 5.010;

use Getopt::Long;

my $direction = 1;
my $opN = 1;
my $opP = 0;
my $help = 0;

GetOptions(
        'n'    => \$opN,
        'p'    => \$opP,
        'help!'     => \$help,
) or die "Incorrect usage!\n";

say "Options: n = $opN; p = $opP";

my @tags = split("\n", `git tag`);
say "@tags";

my $currentTag = `git describe --tags`;
chomp($currentTag);
say "$currentTag";

my $prevTag = my $nextTag = $currentTag;

my $number=0;
$number++ until ($currentTag eq $tags[$number] or $number > scalar @tags);

$prevTag = $number ? $tags[$number-1] : $tags[0];
$nextTag = $number >= scalar @tags -1 ? $currentTag : $tags[$number+1];
say "Perv = $prevTag; Current = $currentTag; Next = $nextTag; Numer = $number;";

if ($opP) {
    $direction = 0;
}

system ("git reset --hard HEAD");
if ($direction) {
    system("git co $nextTag");
} else {
    system("git co $prevTag");
}

# Add to vimrc;
# :nnoremap [g :!./gtag.pl -p<CR><CR>
# :nnoremap ]g :!./gtag.pl -n<CR><CR>
