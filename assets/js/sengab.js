// All copyrights reserved to Sengab Animation.
// https://github.com/Shimi14/sengab-animation

window.addEventListener('DOMContentLoaded', ()=>{

    function sengabAnimation() {
        let winHeight = window.innerHeight;
        let scrollPos = window.scrollY;
        const sengabs = document.querySelectorAll('.has-sengab');
        const sengabAnchors = document.querySelectorAll('[data-sengab-anchor]');
        
        // Event listener Array
        function detectWindowsEvents(winEvents,action) {
            winEvents.forEach(event => {
                window.addEventListener(event,action) 
            })
        }

        // Get the correct position of the Animation item
        function getpos(x) {
            let pos = setupPosition(x);
            const scale = detectScale(x);
            let deffValue;

            // Get the position of the element
            function setupPosition(x) {
                let itemPos = x.getBoundingClientRect().top;
                if(scrollPos > 0) {
                    itemPos += scrollPos
                }
                return itemPos
            }

            //  Check whether the element is scaled
            function detectScale(x) {
                const itemTransform = getComputedStyle(x).getPropertyValue('transform');
                const itemMatrex = itemTransform.match(/^matrix\((.+)\)$/)[1].split(', ');
                let itemScaleY = itemMatrex[3];

                return itemScaleY;
            }
            
            if(scale != 1) {
                // If the element is scaled
                // get the size difference before and after Sscaling.
                if(scale != 0) {
                    deffValue = x.clientHeight - ((scale * x.clientHeight)/2);
                }else {
                    deffValue = (x.clientHeight * -1) / 2;
                }
            }else {
                deffValue = 0
            }
            // Add or subtract the difference to/from the element scroll position
            pos += deffValue

            return pos;
        }

        // A fixer function of scroll position
        // while anchor link target is scaled
        function scrollFixer(item) {
            setTimeout( ()=> {
                window.scrollTo(0,item);
            } ,50)
        }

        // Start Animation when scrolling to the item position
        sengabs.forEach(sengab => {
            const sengabData = sengab.dataset.sengab;
            let sengabHeight = sengab.clientHeight;
            let sengabPos = getpos(sengab);

            detectWindowsEvents(['load','scroll','resize'], ()=> {
                detectWindowsEvents(['resize'], ()=> {
                    sengabPos = getpos();
                })
                winHeight = window.innerHeight;
                sengabHeight = sengab.clientHeight;
                scrollPos = window.scrollY;

                function statusChangeCondition(condition) {

                    if(!sengab.classList.contains('toggle-sengab')) {
                        if(condition) {
                            statusChange('on')
                        }
                    }else {
                        if(condition) {
                            statusChange('on')
                        }else {
                            statusChange('off')
                        }
                    }

                    function statusChange (sengabStatus) {
                        if(!sengabData) {
                            sengab.setAttribute('data-sengab', sengabStatus)
                        }else {
                            sengabData = sengabStatus;
                        }
                    }

                }
                statusChangeCondition(scrollPos + winHeight >= sengabPos + (sengabHeight / 5))
            });
    
        });

        // Fix the scroll position of the animtion item
        //  when click the anchor button
        sengabAnchors.forEach(sengabAnchor => {
            let sengab = document.querySelector(sengabAnchor.dataset.sengabAnchor);
            let sengabPos = getpos(sengab);
            detectWindowsEvents(['load','scroll','resize'], ()=> {
                if(sengab) {
                    detectWindowsEvents(['resize'], ()=> {
                        sengabPos = getpos(sengab);
                    })
                }
                winHeight = window.innerHeight;
                sengabHeight = sengab.clientHeight;
                scrollPos = window.scrollY;
                sengabAnchor.addEventListener('click', ()=> {
                    scrollFixer(sengabPos);
                });
            });

        });
        detectWindowsEvents(['load'], ()=> {
            if(location.hash) {
                let target = document.querySelector(location.hash)
                let checkSengab = Array.from(sengabs).indexOf(target);
                if( -1 !== checkSengab) {
                    let sengabPos = getpos(target);
                    detectWindowsEvents(['resize'], ()=> {
                        sengabPos = getpos(target);
                    })
                    scrollFixer(sengabPos);
                }
            }

        });
    }
    sengabAnimation();
})