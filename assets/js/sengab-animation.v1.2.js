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
            const scaleValue = detectTransform(x)[0];
            const translateValue = detectTransform(x)[1];
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
            function detectTransform(x) {
                let itemScaleY;
                let itemTranslateY;
                if( 'none' !=  getComputedStyle(x)) {
                    if( 'none' !=   getComputedStyle(x).getPropertyValue('transform')) {
                        const itemTransform = getComputedStyle(x).getPropertyValue('transform');
                        const itemMatrex = itemTransform.match(/^matrix\((.+)\)$/)[1].split(', ');
                        itemScaleY = itemMatrex[3];
                        itemTranslateY = itemMatrex[5];
                    }else {
                        itemScaleY = 1;
                        itemTranslateY = 0;
                    }
                }else {
                    itemScaleY = 1;
                    itemTranslateY = 0;
                }
                return [Number(itemScaleY),Number(itemTranslateY)];
            }
            
            if(scaleValue !== 1) {
                // If the element is scaled
                // get the size difference before and after Sscaling.
                if(scaleValue !== 0) {
                    deffValue = x.clientHeight - ((scaleValue * x.clientHeight)/2) - translateValue;
                }else {
                    deffValue = ((x.clientHeight * -1) / 2) - translateValue;
                }
            }else {
                deffValue = 0 - translateValue
            }
            // Add or subtract the difference to/from the element scroll position
            pos += deffValue

            return Number(pos);
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
            let sengabHeight = sengab.clientHeight;
            let sengabPos = getpos(sengab);
            
            // Get the user setting data 
            const sengabData = sengab.dataset.sengab;
            const sengabDuration = sengab.dataset.sengabDuration;
            const sengabDelay = sengab.dataset.sengabDelay;
            const sengabEffect = sengab.dataset.sengabEffect;
            const sengabOpacity = sengab.dataset.sengabOpacity;
            const sengabScale = sengab.dataset.sengabScale;
            const sengabTranslateY = sengab.dataset.sengabTranslateY;
            const sengabTranslateX = sengab.dataset.sengabTranslateX;
            const sengabStartPos = sengab.dataset.sengabStartPos;

            
            // Add the user setting transition data
            if(sengabDuration) {
                sengab.style.transitionDuration = sengabDuration;
            }
            if(sengabDelay) {
                sengab.style.transitionDelay = sengabDelay;
            }
            if(sengabEffect) {
                sengab.style.transitionTimingFunction = sengabEffect;
            }

            // Add the user setting transform and opaicty data
            function setupSengabData() {
                if(sengabScale && sengabTranslateY && sengabTranslateX && sengabOpacity) {
                    sengab.style.transform = `scale(${sengabScale}) translateY(${sengabTranslateY}) translateX(${sengabTranslateX})`;
                    sengab.style.opacity = sengabOpacity;
                }else {
                    if(sengabScale && sengabTranslateY && sengabTranslateX) {
                        sengab.style.transform = `scale(${sengabScale}) translateY(${sengabTranslateY}) translateX(${sengabTranslateX})`;
                    }else if(sengabOpacity && sengabTranslateY && sengabTranslateX) {
                        sengab.style.transform = `translateY(${sengabTranslateY}) translateX(${sengabTranslateX})`;
                        sengab.style.opacity = sengabOpacity;
                    }else if(sengabOpacity && sengabScale && sengabTranslateY) {
                        sengab.style.transform = `scale(${sengabScale}) translateY(${sengabTranslateY})`;
                        sengab.style.opacity = sengabOpacity;
                    }else if(sengabOpacity && sengabScale && sengabTranslateX) {
                        sengab.style.transform = `scale(${sengabScale}) translateX(${sengabTranslateX})`;
                        sengab.style.opacity = sengabOpacity;
                    }else {
                        if(sengabTranslateY && sengabTranslateX) {
                            sengab.style.transform = `translateY(${sengabTranslateY}) translateX(${sengabTranslateX})`;
                        }else if(sengabScale && sengabTranslateY) {
                            sengab.style.transform = `scale(${sengabScale}) translateY(${sengabTranslateY})`;
                        }else if(sengabScale && sengabTranslateX) {
                            sengab.style.transform = `scale(${sengabScale}) translateX(${sengabTranslateX})`;
                        }else if(sengabTranslateY && sengabOpacity) {
                            sengab.style.transform = `translateY(${sengabTranslateY})` ;
                            sengab.style.opacity = sengabOpacity;
                        }else if(sengabTranslateX && sengabOpacity) {
                            sengab.style.transform = `translateX(${sengabTranslateX})` ;
                            sengab.style.opacity = sengabOpacity;
                        }else if(sengabScale && sengabOpacity) {
                            sengab.style.transform = `scale(${sengabScale})`;
                            sengab.style.opacity = sengabOpacity;
                        }else {
                            if(sengabScale) {
                                sengab.style.transform = `scale(${sengabScale})`;
                            }
                            if(sengabTranslateY) {
                                sengab.style.transform = `translateY(${sengabTranslateY})` ;
                            }
                            if(sengabTranslateX) {
                                sengab.style.transform = `translateX(${sengabTranslateX})` ;
                            }
                        }
                    }
                }
            }
            
            // Remove the user added animation
            function resetSengabData() {
                if(sengabScale && sengabTranslateY && sengabTranslateX && sengabOpacity) {
                    sengab.style.transform = 'scale(1,1) translateY(0) translateX(0)';
                    sengab.style.opacity = 1;
                    
                }else {
                    if(sengabScale && sengabTranslateY && sengabTranslateX) {
                        sengab.style.transform = 'scale(1,1) translateY(0) translateX(0)';
                    }else if(sengabOpacity && sengabTranslateY && sengabTranslateX) {
                        sengab.style.transform = `translateY(0) translateX(0)`;
                        sengab.style.opacity = 1;
                    }else if(sengabOpacity && sengabScale && sengabTranslateY) {
                        sengab.style.transform = `scale(1,1) translateY(0)`;
                        sengab.style.opacity = 1;
                    }else if(sengabOpacity && sengabScale && sengabTranslateX) {
                        sengab.style.transform = `scale(1,1) translateX(0)`;
                        sengab.style.opacity = 1;
                    }else {
                        if(sengabTranslateY && sengabTranslateX) {
                            sengab.style.transform = 'translateY(0) translateX(0)';
                            
                        }else if(sengabScale && sengabTranslateY) {
                            sengab.style.transform = 'scale(1,1) translateY(0)';
                        }else if(sengabScale && sengabTranslateX) {
                            sengab.style.transform = 'scale(1,1) translateX(0)';
                        }else if(sengabTranslateY && sengabOpacity) {
                            sengab.style.transform = 'translateY(0)';
                            sengab.style.opacity = 1;
                        }else if(sengabTranslateX && sengabOpacity) {
                            sengab.style.transform = 'translateX(0)';
                            sengab.style.opacity = 1;
                        }else if(sengabScale && sengabOpacity) {
                            sengab.style.transform = 'scale(1,1)';
                            sengab.style.opacity = 1;
                        }else {
                            if(sengabScale) {
                                sengab.style.transform = 'scale(1,1)';
                            }else if(sengabTranslateY) {
                                sengab.style.transform = 'translateY(0)' ;
                            }else if(sengabTranslateX) {
                                sengab.style.transform = 'translateX(0)' ;
                            }else if (sengabOpacity) {
                                sengab.style.opacity = 1;
                            }
                        }
                        
                    }

                }
            }

            detectWindowsEvents(['load','scroll','resize'], ()=> {
                setupSengabData();
                detectWindowsEvents(['resize'], ()=> {
                    sengabPos = getpos(sengab);
                })
                winHeight = window.innerHeight;
                sengabHeight = sengab.clientHeight;
                scrollPos = window.scrollY;

                function statusChangeCondition(condition) {

                    if(!sengab.classList.contains('toggle-sengab')) {
                        if(condition) {
                            statusChange('on');
                            resetSengabData();
                        }
                    }else {
                        if(condition) {
                            statusChange('on');
                            resetSengabData();
                        }else {
                            statusChange('off');
                            setupSengabData();
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
                statusChangeCondition(scrollPos + winHeight >= sengabPos + (sengabHeight * (sengabStartPos ? sengabStartPos : .2) ))
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