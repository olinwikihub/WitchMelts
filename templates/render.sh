#!/bin/bash

HTMLFILES=( 
    "index"
    "design_development"
    "task_breakdown" 
    )

for HTMLFILE in ${HTMLFILES[@]}; do
    jade $HTMLFILE.jade &&
    mv $HTMLFILE.html ../ &&
    start chrome ../$HTMLFILE.html
done