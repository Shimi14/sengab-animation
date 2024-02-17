# Sengab Animation
## How to setup
1- Download [sengab-animation.v**.js] file form [assets/js] folder and include it to your project.<br>
2- Download [sengab-animation.v**.css] or [sengab-animation.v**.min.css] file [assets/css] folder and include it to your project.

## How to use
1- Add [has-sengab] class to the element you want to add animation effect to so that it's recognized as an animation target.<br>
2- Add one of the animation classes from the <a href="#animation-classes" >Animation Classes</a> table.<br>

## More Customization

### Customize the animation duration
By default the animation duration is **0.5s** for  transformation and **0.8s** for opacity, but you can customize the animation duration using one of the two methods below. <br>

<ins>Method one:</ins><br>
Add one of **[v-slow, slow, normal, fast, v-fast]** to the end of the class (ex: slide-right-fast) . <br><br>
<ins>Method two:</ins><br>
Add [data-sengab-duration=""] and add the value between the quotation mark (ex: data-sengab-duration=".2s").<br><br>

### Customize the animation delay
There is two methods to customize the animation delay.<br><br>

<ins>Method one:</ins><br>
Add one of **[late, v-late]** to the end of the class. You can use this method only when you use the first method of the <a href="#customize-the-animation-duration">Customize the animation duration</a> and the delay class word should come after the duration class word (ex: slide-right-fast-late) . <br><br>

<ins>Method two:</ins><br>
Add [data-sengab-delay=""] and add the value between the quotation mark (ex: data-sengab-delay=".2s").<br><br>

### Customize the animation times

2- Add [toggle-sengab] class to the element if you want the animation effect to be toggled every time the scroll reaches the element.<br>

### Customize the animation start position
By default, the animation effect starts when the scroll passes 20% of the element height. However, you can change the animation start position by adding [data-sengab-start-pos=""].and add a value between 0 ~ 1 as 0 means that the animation should start when the scroll reaches the to top (as 0 mean 0%) of the element, and 1 means that the animation should it start when the scroll reaches the end (as 1 means 100%) of the element.<br>

### Customize the transform values of the element (<ins>Not recommended</ins>)

You can also customize the scale values and the translate values of the element to increase or decrease the speed of the animation or even to create your custom animation movement, however this effect will work when the page load only if the scroll position was lower than the element position for the first animation or in the second time of the animation with a toggle behavior.<br>
To customize the scale values add [data-sengab-scale="(value1,value2)"].<br>
To customize the translation values add [data-sengab-translateY=""] or [data-sengab-translateX=""] or both of them and add the value in quotation mark same as you write in css.

## Animation Classes
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

## Anchor Scroll Fixer
Sengab Animation fixes the scroll position to the anchor link target automatically if the scroll starts on page load. But it do not fix it if you the scroll starts after clicking the anchor link.<br>
To fix the scroll of anchor link add [data-sengab-anchor="#targetID"] to the anchor link and add the ID of the target element same as the one in the 'href' attribute.
<br><br>
All copyrights reserved to Sengab Animation.
https://github.com/Shimi14/sengab-animation