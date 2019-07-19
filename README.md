# ira-marina-projects
This is where we will store the demonstrations from our meetings

# 28/06/2019
## Directives
Our project today was **hello-element-directives**: https://github.com/kobi2294/ira-marina-projects/tree/master/hello-element-directive
And we did the following: 

- How to create directives
- How to bind to the host using HostBinding and HostListerner
- How to get Inputs from the container html
- How to send Outputs from the decorator
- Selectors
- Input Shortcuts

### Homework :-)
1. 
- Create an angular application
- Create a directive that can hide the host element. When the user clicks the host it will disappear for 5 seconds
- Please use display:none to make it disappear
- Add an input of type number called delay, that will decide for how long to hide it. the default will be 5 seconds

2. 
- Create a directive that can be applied to input of type text
- Make sure that when applied, it limits the lenghth of the input to 10 chars
- Please use the input event
- Please use the value property of the input
- You do not need regular expressions
- When the user tries to make a change that passes the 10 chars, revert to the last legal state
