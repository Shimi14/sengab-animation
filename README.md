# Sengab Animation
Welcome to Senga Animation
This animation is an open source animation created for beginner coders who is looking for a simple to use animation as this animation can be used only by adding css classes and no need to use any other attribute for it's basic use.<br>
However, you can extend the use of this animation fuctionality and solve some issues might happens when targetin an animation item by anchor link.But in this case you will have to use some attributes otherwise you will have to fix the issue by yourself. 
I am planning some advanced factions to the animation to give the user more freedom to customize the animation time and speed.<br>
I decided to call the current version the basic mode until adding the advanced mode i talked about above.<br>
I welcome any notes or reports might help to improve the fuctionality of the animation. <br>
## How to use
Add [has-sengab] + one of the animation classes to the target element.
## Basic Mode
In basic mode you can use the classes above to add one of three animation effects [slide, fade, zoom].<br>
You should chose one of the pre setting five speeds **[v-slow, slow, normal, fast, v-fast]**.<br>
Finally if you want to add a delay, you can chose one of two delay moodes **[late, v-late]**.<br>
That is how the class looks like.<br>
||Type|Speed|Delay|
|-:|----|-----|-----|
|Example-1|fade-in|fast||
|Example-2|fade-in|fast|late|

The class of example one will be (fade-in-fast).<br>
The class of example two will be (fade-in-fast-late).<br>
||Type|Speed|Delay|
|-:|----|-----|-----|
|Wrong<br>example|fade-in|||

The last exapmle is a wrong example as the animation will not be recognized if you has not chosed any speed.
### Animation Types
Here is all the animations you can use.<br>
> [!CAUTION]
> Do not forget to add the animation speed.
> fade-in-(speed)<br>
> **speeds** : [v-slow, slow, normal, fast, v-fast]
<br>

|fade|slide|zoom|
|---:|----|-----|
|fade-in|-|zoom-in|
|-|-|zoom-in-up|
|-|-|zoom-in-up-left|
|-|-|zoom-in-up-right|
|-|-|zoom-in-down|
|-|-|zoom-in-down-left|
|-|-|zoom-in-down-right|
|-|-|zoom-in-left|
|-|-|zoom-in-right|
|fade-out|-|zoom-out|
|-|-|zoom-out-up|
|-|-|zoom-out-up-left|
|-|-|zoom-out-up-right|
|-|-|zoom-out-down|
|-|-|zoom-out-down-left|
|-|-|zoom-out-down-right|
|-|-|zoom-out-left|
|-|-|zoom-out-right|
|fade-up|slide-up|-|
|-|slide-up-left|-|
|-|slide-up-right|-|
|fade-down|slide-down||
|-|slide-down-left|-|
|-|slide-down-right|-|
|fade-right|slide-right|-|
|fade-left|slide-left||

### Anchor Scroll Fixer
Sengab Animation fixes the scroll position to the anchor link target automatically if the scroll starts on page load. But it do not fix it if you the scroll starts after clicking the anchor link.<br>
To fix the scroll of anchor link add **[data-sengab-anchor="#targetID"]** to the anchor link and add the ID of the target element same as the one in the 'href' attribute.
<br><br>
All copyrights reserved to Sengab Animation.
https://github.com/Shimi14/sengab-animation