 // here I grab the elements at various locations and via eventlisteners
      // when the user types the prcentage value should increase in real time
      document.getElementById("A1Mark").addEventListener("input", calculateA1Average);
      document.getElementById("A1Total").addEventListener("input", calculateA1Average);

      document.getElementById("A2Mark").addEventListener("input", calculateA2Average);
      document.getElementById("A2Total").addEventListener("input", calculateA2Average);

      document.getElementById("A3Mark").addEventListener("input", calculateA3Average);
      document.getElementById("A3Total").addEventListener("input", calculateA3Average);

      document.getElementById("A4Mark").addEventListener("input", calculaterA4Average);
      document.getElementById("A4Total").addEventListener("input", calculaterA4Average);

     
      // I struggled to figure out how to loop this process so I instead made four version of the function.
      // the functions just get the input values and calculate the average (mark/total = average)
      // the last line updates percentage value shown on the webpage
      function calculateA1Average()
      {
        var A1Mark = document.getElementById("A1Mark").value;
        var A1Total = document.getElementById("A1Total").value;
        var A1Average = A1Mark / A1Total;
        document.getElementById("percent1").innerHTML = percentConversion(A1Average);
      }

      function calculateA2Average()
      {
        var A2Mark = document.getElementById("A2Mark").value;
        var A2Total = document.getElementById("A2Total").value;
        var A2Average = A2Mark / A2Total;
        document.getElementById("percent2").innerHTML = percentConversion(A2Average);
      }

      function calculateA3Average()
      {
        var A3Mark = document.getElementById("A3Mark").value;;
        var A3Total = document.getElementById("A3Total").value;
        var A3Average = A3Mark / A3Total;
        document.getElementById("percent3").innerHTML = percentConversion(A3Average);
      }

      function calculaterA4Average()
      {
        var A4Mark = document.getElementById("A4Mark").value;
        var A4Total = document.getElementById("A4Total").value;
        var A4Average = A4Mark / A4Total;
        document.getElementById("percent4").innerHTML = percentConversion(A4Average);
      }

      // Used to multiply by 100 to get a percentage value not a decimal
      function percentConversion(input)
      {
        return Math.round(input * 100);
      }


      // Mean calculations
        function meanCalculation()
        {
          //used to keep track of how many grades are used in the calculation. Will decrease if a input section is unused. 
          var counter = 4;

          // figures out the average for a particular mark. The average value eventually gets used to calculate the mean. 
          var A1Mark = document.getElementById("A1Mark").value;
          var A1Total = document.getElementById("A1Total").value;
          var A1Average = A1Mark / A1Total;

          // this checks to make sure the number isnt infinity or Not a Number which could cause an error. 
          if(!isFinite(A1Average))
          {
            counter--;
            A1Average = 0;
          }


          var A2Mark = document.getElementById("A2Mark").value;
          var A2Total = document.getElementById("A2Total").value;
          var A2Average = A2Mark / A2Total;

          if(!isFinite(A2Average))
          {
            counter--;
            A2Average = 0;
          }

          var A3Mark = document.getElementById("A3Mark").value;
          var A3Total = document.getElementById("A3Total").value;
          var A3Average = A3Mark / A3Total;
         
          if(!isFinite(A3Average))
          {
            counter--;
            A3Average = 0;
          }

          var A4Mark = document.getElementById("A4Mark").value;
          var A4Total = document.getElementById("A4Total").value;
          var A4Average = A4Mark / A4Total;

          if(!isFinite(A4Average))
          {
            counter--;
            A4Average = 0;
          }

          // using the averages divided by the counter(0-4) we can calculate the mean. 
          var mean = percentConversion((A1Average + A2Average + A3Average + A4Average) / counter);

          return mean;
        }



        function weightCalculation()
        {
          //collect the input values and calculate the averages
          var A1Mark = document.getElementById("A1Mark").value;
          var A1Total = document.getElementById("A1Total").value;
          var A1Average = A1Mark / A1Total;
          var A1Weight = document.getElementById("weightA1").value;

          // check to ensure that the input values do not equal infinity or NaN
          if(!isFinite(A1Average) || !isFinite(A1Weight))
          {
            A1Average = 0;
            A1Weight = 0;
          }

          var A2Mark = document.getElementById("A2Mark").value;
          var A2Total = document.getElementById("A2Total").value;
          var A2Average = A2Mark / A2Total;
          var A2Weight = document.getElementById("weightA2").value;

          if(!isFinite(A2Average) || !isFinite(A2Weight))
          {
            A2Average = 0;
            A2Weight = 0;
          }

          var A3Mark = document.getElementById("A3Mark").value;
          var A3Total = document.getElementById("A3Total").value;
          var A3Average = A3Mark / A3Total;
          var A3Weight = document.getElementById("weightA3").value;
         
          if(!isFinite(A3Average) || !isFinite(A3Weight))
          {
            A3Average = 0;
            A3Weight = 0;
          }

          var A4Mark = document.getElementById("A4Mark").value;
          var A4Total = document.getElementById("A4Total").value;
          var A4Average = A4Mark / A4Total;
          var A4Weight = document.getElementById("weightA4").value;

          if(!isFinite(A4Average) || !isFinite(A4Weight))
          {
            A4Average = 0;
            A4Weight = 0;
          }

          var totalWeight = (Number(A1Weight)+Number(A2Weight)+Number(A3Weight)+Number(A4Weight));
          var weightedMean = (((A1Average*A1Weight + A2Average*A2Weight + A3Average*A3Weight + A4Average*A4Weight)/totalWeight)*100).toFixed(2);
         
          return weightedMean;
        }
