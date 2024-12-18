            function Men(){

            inputdata = document.getElementById("inp").value
            mendata = "men product"
            womendata = "women product"
            kidsdata = "kids product"
            alldata = "all"

            
            if(inputdata===mendata){
                menshow = document.getElementById("men")
                menshow.style.display = "block"
                alldata = document.getElementById("all")
                alldata.style.display = "none"
                womenshow = document.getElementById("women")
                womenshow.style.display = "none"
                kidsshow = document.getElementById("kids")
                kidsshow.style.display = "none"
            }
            else if (inputdata===womendata){
                menshow = document.getElementById("men")
                menshow.style.display = "none"
                alldata = document.getElementById("all")
                alldata.style.display = "none"
                womenshow = document.getElementById("women")
                womenshow.style.display = "block"
                kidsshow = document.getElementById("kids")
                kidsshow.style.display = "none"
            }
            else if (inputdata===kidsdata){
                menshow = document.getElementById("men")
                menshow.style.display = "none"
                alldata = document.getElementById("all")
                alldata.style.display = "none"
                womenshow = document.getElementById("women")
                womenshow.style.display = "none"
                kidsshow = document.getElementById("kids")
                kidsshow.style.display = "block"
            }
            else if (inputdata===alldata){
                menshow = document.getElementById("men")
                menshow.style.display = "none"
                alldata = document.getElementById("all")
                alldata.style.display = "block"
                womenshow = document.getElementById("women")
                womenshow.style.display = "none"
                kidsshow = document.getElementById("kids")
                kidsshow.style.display = "none"
            }
            else{
                window.location.reload()
            }

        }
        
        function All(){
            menshow = document.getElementById("men")
            menshow.style.display = "none"
            alldata = document.getElementById("all")
            alldata.style.display = "block"
            womenshow = document.getElementById("women")
            womenshow.style.display = "none"
            kidsshow = document.getElementById("kids")
            kidsshow.style.display = "none"
        }

        function Menn(){
            menshow = document.getElementById("men")
            menshow.style.display = "block"
            alldata = document.getElementById("all")
            alldata.style.display = "none"
            womenshow = document.getElementById("women")
            womenshow.style.display = "none"
            kidsshow = document.getElementById("kids")
            kidsshow.style.display = "none"
        }

        function Women(){
            womenshow = document.getElementById("women")
            womenshow.style.display = "block"
            alldata = document.getElementById("all")
            alldata.style.display = "none"
            menshow = document.getElementById("men")
            menshow.style.display = "none"
            kidsshow = document.getElementById("kids")
            kidsshow.style.display = "none"
        }

        function Kids(){
            womenshow = document.getElementById("women")
            womenshow.style.display = "none"
            alldata = document.getElementById("all")
            alldata.style.display = "none"
            menshow = document.getElementById("men")
            menshow.style.display = "none"
            kidsshow = document.getElementById("kids")
            kidsshow.style.display = "block"
        }


        function Ak(){
            opandata = document.getElementById("menu")
            opandata.style.transform="translateX(0px)"
            opandata.style.transition= "all 0.5s"
            closedata = document.getElementById("close")
            closedata.style.display="block"
            clickdata = document.getElementById("opan")
            clickdata.style.display="none"
        }
        function Demo(){
            closeed = document.getElementById("opan")
            closeed.style.display="block"
            clickdata = document.getElementById("menu")
            clickdata.style.transform="translateX(-1400px)"
            clickdata.style.transition= "all 0.5s"
            clickedata = document.getElementById("close")
            clickedata.style.display="none"
        }

        function Img(){
            picopandata = document.getElementById("detalis")
            picopandata.style.display = "block"
        }

        function Imgclose(){
            picopandata = document.getElementById("detalis")
            picopandata.style.display = "none"
        }

        var swiper = new Swiper(".mySwiper", {
            navigation: {
              nextEl: ".swiper-button-next",
              prevEl: ".swiper-button-prev",
            },
            loop:true,
          });       