$(document).ready(function() {
    jQuery.validator.addMethod("lettersonly", function(value, element) {
        return this.optional(element) || /^[a-zA-Z\s-, ]+$/i.test(value);
      }, "Letters only please");
      
      jQuery.validator.addMethod('pnumber', function(value, element) {
        return this.optional(element) || !!value.trim().match(/^\d{10}(?:[-\s]\d{4})?$/);
      }, 'Invalid phone number'); 
    
      jQuery.validator.addMethod('email', function(value, element) {
        return this.optional(element) || !!value.trim().match(/^([A-Za-z0-9_\-\.])+\@([tntra|GMAIL])+\.(io)$/  );
      }, 'Invalid Email'); 
     
      
      
  //    /^([A-Za-z0-9_\-\.])+\@([gmail|GMAIL])+\.(com)$/
      $("#evalform").validate({
        rules: {
          name : {
            required: true,
            lettersonly: true
          },
          phone: {
            required: true,
            pnumber : true
          },
          email: {
            required: true,
            email: true
         },
         Gender:{
  
          required:true
        },
        age:{
           required:true,
           min:18,
           max:25
        },
        pickupTime1:{
          required:true
        },
        pickupTime2:{
          required:true
        },
        pickupTime3:{
          required:true
        },
        pickupTime4:{
          required:true
        },
        pickupTime5:{
          required:true
        },
        pickupTime6:{
          required:true
        },
        pickupTime7:{
          required:true
        }
         },
         messages : {
          name: {
            lettersonly:"Name should contain only letters."
          },
          phone: {
              pnumber:"Phone number should contain only 10 number."
            },
            email: {
              email: "The email should be in the format: abc@tntra.io"
            },
            pickupTime1:{
              required:"This feild is required"
            },
            pickupTime2:{
              required:"This feild is required"
            },
            pickupTime3:{
              required:"This feild is required"
            },
            pickupTime4:{
              required:"This feild is required"
            },
            pickupTime5:{
              required:"This feild is required"
            },
            pickupTime6:{
              required:"This feild is required"
            },
            pickupTime7:{
              required:"This feild is required"
            }

          },
         
          errorPlacement: function(error, element) 
        {
          
            error.appendTo( element.parents('.container') );
            }
          });
          $("#submit").on('click', function() {
       
            localStorage.name = $('#name').val();
            localStorage.age = $('#age').val();
            localStorage.email = $('#email').val();
            localStorage.phone = $('#phone').val();
            localStorage.sunday= $('.sun1').val();
            localStorage.monday = $('.mon1').val();
            localStorage.tuesday= $('.tue1').val();
            localStorage.wednesday = $('.wed1').val();
            localStorage.thursday= $('.thur1').val();
            localStorage.friday = $('.fri1').val();
            localStorage.saturday = $('.sat1').val();
            localStorage.Gender=$("input[name='Gender']:checked").val();
            console.log("data saved"); 
           });

           $('.mon').attr('disabled', true);

           $('.selected').change(function() {
             $('.mon').attr('disabled', !this.checked);
           });
           $('.mon1').attr('disabled', true);

           $('.mon').change(function() {
             $('.mon1').attr('disabled', !this.checked);
           });

           $('.sun').attr('disabled', true);
            $('.selected').change(function() {
             $('.sun').attr('disabled', !this.checked);
           });
           $('.sun1').attr('disabled', true);
           $('.sun').change(function() {
             $('.sun1').attr('disabled', !this.checked);
           });

           $('.tue').attr('disabled', true);
            $('.selected').change(function() {
             $('.tue').attr('disabled', !this.checked);
           });
           $('.tue1').attr('disabled', true);
           $('.tue').change(function() {
             $('.tue1').attr('disabled', !this.checked);
           });

           $('.wed').attr('disabled', true);
            $('.selected').change(function() {
             $('.wed').attr('disabled', !this.checked);
           });
           $('.wed1').attr('disabled', true);
           $('.wed').change(function() {
             $('.wed1').attr('disabled', !this.checked);
           });

           $('.thur').attr('disabled', true);
           $('.selected').change(function() {
            $('.thur').attr('disabled', !this.checked);
          });
          $('.thur1').attr('disabled', true);
          $('.thur').change(function() {
            $('.thur1').attr('disabled', !this.checked);
          });
          $('.fri').attr('disabled', true);
           $('.selected').change(function() {
            $('.fri').attr('disabled', !this.checked);
          });
          $('.fri1').attr('disabled', true);
          $('.fri').change(function() {
            $('.fri1').attr('disabled', !this.checked);
          });

          $('.sat').attr('disabled', true);
           $('.selected').change(function() {
            $('.sat').attr('disabled', !this.checked);
          });
          $('.sat1').attr('disabled', true);
          $('.sat').change(function() {
            $('.sat1').attr('disabled', !this.checked);
          });

        
      });
         
