

                    if (document.querySelector('.beae-z8gzj5rb:not([data-beae-bind])')) {
                        (function() {!this.$el||!this.$el.querySelector(".beae-section-background-video")||typeof handleVideoBg=="undefined"||!this.isLive||(handleVideoBg.bind(this)(),window.addEventListener("resize",handleVideoBg.bind(this)))}).call({
                            $el: document.querySelector('.beae-z8gzj5rb:not([data-beae-bind])'),
                            
                            id: 'beae-z8gzj5rb',
                            isLive: true
                        });
                        document.querySelector('.beae-z8gzj5rb:not([data-beae-bind])').setAttribute('data-beae-bind', true);
                    }
                
                    if (document.querySelector('.beae-cwibyi72:not([data-beae-bind])')) {
                        (function() {if(!this.$el)return;let d=this.$el,v=d.querySelector(".beae-container-image[data-screens]"),ze=[],Je="";v&&(Je=v.getAttribute("data-screens"),Je&&(ze=JSON.parse(Je))),this.isLive&&this.settings_image&&this.settings_image.link!="none"&&(Xe.bind(this),window.addEventListener("resize",Xe.bind(this)));function Xe(){if(!Je)return;let Ue={};if(ze.forEach((Ze,Qe)=>{let Ke=!1,et=Qe==ze.length-1;if(Qe==0)Ke=window.matchMedia(`only screen and (min-width: ${Ze.min+1}px)`);else{let tt=`only screen and (max-width: ${Ze.width}px) ${et?"":`and (min-width:${Ze.min+1}px)`}`;Ke=window.matchMedia(tt)}Ke&&Ke.matches&&(Ue=Ze)}),Object.keys(Ue).length){let Ze=d.querySelector("[data-beae-popup]"),Qe={},Ke=this.settings_image.image;if(!Ze)return;this.settings_image.link==="lightbox"?(this.settings_image.lightbox==="yes"&&(Qe["data-beae-popup"]="beae-"+Math.random().toString(36).substr(2,8),Ue.name=="desktop"?Qe["data-beae-popup-src"]=Ke.value:Qe["data-beae-popup-src"]=Ke[`value__${Ue.name}`]),Ue.name=="desktop"?Qe.href=Ke.value:Qe.href=Ke[`value__${Ue.name}`]):link==="custom"&&this.settings_image.customLink&&this.settings_image.customLink.href&&Object.assign(Qe,this.settings_image.customLink),Object.keys(Qe).length&&Object.keys(Qe).forEach(et=>{Qe[et]&&Ze.setAttribute(et,Qe[et])})}}this.settings_image&&this.settings_image.link==="lightbox"&&this.settings_image.lightbox==="yes"&&window.beaejQuery(d).find("[data-beae-popup]").beaePopup({type:"image"})}).call({
                            $el: document.querySelector('.beae-cwibyi72:not([data-beae-bind])'),
                            settings_image: {"link":"none","image":{"id":"wYk7Qmg6","audit":{"type":"image","alt":"Kitsune_mask_1_10bc1780-7b77-4201-94ea-1a5281349f1b","src":"https://cdn.shopify.com/s/files/1/0557/9535/1616/files/Kitsune_mask_1_10bc1780-7b77-4201-94ea-1a5281349f1b.gif?v=1680531712","elmid":"beae-cwibyi72","size":13917,"width":1200,"height":800},"name":"Kitsune_mask_1_10bc1780-7b77-4201-94ea-1a5281349f1b","value":"https://cdn.shopify.com/s/files/1/0557/9535/1616/files/Kitsune_mask_1_10bc1780-7b77-4201-94ea-1a5281349f1b.gif?v=1680531712","thumbnail":"https://cdn.shopify.com/s/files/1/0557/9535/1616/files/Kitsune_mask_1_10bc1780-7b77-4201-94ea-1a5281349f1b.gif?v=1680531712"},"lightbox":"no"},
                            id: 'beae-cwibyi72',
                            isLive: true
                        });
                        document.querySelector('.beae-cwibyi72:not([data-beae-bind])').setAttribute('data-beae-bind', true);
                    }
                