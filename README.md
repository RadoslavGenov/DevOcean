
This is the React TS Application that I was instructed to make. For the small size of the application this is the architecture that i chose to go with: (git does not let me add empty directories and rather than putting empty JS files in each directory I have listed the set up architecture here)

    -src
    -components
    -common
    -hoc
    -constants
    -navigation
    -redux
    -screens
    -shared
    -tools
    
I also want to add that I have not made the application responsive!

If this had been an application which would have required to be much larger and extensible I would have used a different architecture dividing responsibilities into separate modules, each of which would have its own styles, tools, utils, redux, and index files. To have better separation of concerns.

I decided to use hooks, since they have much less overhead than classes in React. 
