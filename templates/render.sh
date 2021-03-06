#!/bin/bash

HTMLFILES=( 
    "index"
    "project_brief"
    "inspirational_design"
    "needs_analysis"
    "design_narrative"
    "story_boards"
    "wireframes"
    "design_development"
    "task_breakdown"
    "prototype"
    "design_refinement"
    "usability_test"
    )

for HTMLFILE in ${HTMLFILES[@]}; do
    jade $HTMLFILE.jade &&
    mv $HTMLFILE.html ../ 
    # && start chrome ../$HTMLFILE.html
done

# start chrome \../usability_test.html