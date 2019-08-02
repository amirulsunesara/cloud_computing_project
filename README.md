# Cloud_Computing_Project
# TEAM 2 - BOOM

## Project Description 

<p>Accordingly, to make the project more scalable and reliable, seven Sails JS projects were created, in which four were for the backend web services and remaining three for the frontend UI of the project. </p>
<p>Moreover, the project is designed to fulfill all the requirements and pass all the test cases. So, the flow begins with the MBR’s UI and web service. Firstly, the customer will enter his details on the MBR portal and then MBR’s web service will be invoked to store the detail of the customer. Now, to check the mortgage application status customer can login in broker portal and can check the application status. Then after, the customer will login into the Employer’s portal, here the employer’s web service will be invoked to authenticate the employee(customer) of the respective company. Afterwards, the employee(customer) will fill in the form to send details to the MBR. Employer’s web service will be invoked, and details of the employee will be sent to the MBR’s portal. In addition, session and tokens are generated on all portals of the project.</p>
<p>Consequently, the Customer will login into the Real Estate’s Portal and submit the request for the Appraisal, here the RE’s web service will be invoked to authenticate the customer and generate the appraisal request. Also, session and tokens will be generated. Then after, the Appraiser will login into the Real Estate’s Portal to approve and enter the appraisal value to the request generated by the customer. Once the appraiser will approve the request, the emails will be sent to the customer regarding his request, these emails are triggered and sent using the logic application i.e. workflows implemented on Microsoft Azure. Also, in this scenario, once the value is entered and request is approved by the appraiser, the value will be sent to the Insurance Web Service, which will compute the total value, where it will also deduct the cost and sent the computed value to the MBR’s Web Service.</p>
<p>Finally, the customer will be able to check his application status and amount value on MBR’s portal. Here the value is sent by the Insurance Web Service. Also, the application status will be changed to approved. </p>

## URL's For All Hosted Web Services and Front-end Projects (Cloud Deployed URLs)

1. Insurance Webservice: [click here](https://insuranceservice.herokuapp.com/)
2. Real Estate Webservice: [click here](https://realestatewebservice.herokuapp.com/)
3. Broker’s Webservice: [click here](https://brokerwebservice.herokuapp.com/)
4. Employer’s Webservice: [click here](https://employerservice.herokuapp.com/)
5. Broker’s UI: [click here](https://brokerui.herokuapp.com/)
6. Employer’s UI: [click here](https://employerui.herokuapp.com/)
7. Real Estate UI: [click here](https://realestateui.herokuapp.com/)

## References

<p>[1] T. Company, "Waterline (ORM)", Sailsjs.com, 2019. [Online]. Available: https://sailsjs.com/documentation/reference/waterline-orm. </p>
<p>[2] "How to validate URL address in JavaScript", Tutorialspoint.com, 2019. [Online]. Available: https://www.tutorialspoint.com/How-to-validate-URL-address-in-JavaScript. </p>
<p>[3] T. Company, "Logging", Sailsjs.com, 2019. [Online]. Available: https://sailsjs.com/documentation/concepts/logging. </p>
<p>[4] T. Company, "sails.config.log", Sailsjs.com, 2019. [Online]. Available: https://sailsjs.com/documentation/reference/configuration/sails-config-log. </p>
<p>[5] T. Company, "sails.config.log", Sailsjs.com, 2019. [Online]. Available: https://sailsjs.com/documentation/reference/configuration/sails-config-log</p>
<p>[6] "Beautiful Winston: A Simple and Universal Logger - Chingu - Medium", Medium, 2019. [Online]. Available: https://medium.com/chingu/beautiful-winston-a-simple-and-universal-logger-6a2d38c01a69. </p>
<p>[7] "winston", npm, 2019. [Online]. Available: https://www.npmjs.com/package/winston. </p>
<p>[8] T. Company, "Response (`res`)", Sailsjs.com, 2019. [Online]. Available: https://sailsjs.com/documentation/reference/response-res. </p>
<p>[9] Mark Otto, "Navbar", Getbootstrap.com, 2019. [Online]. Available: https://getbootstrap.com/docs/4.0/components/navbar/.</p>
<p>[10] Mark Otto, "Buttons", Getbootstrap.com, 2019. [Online]. Available: https://getbootstrap.com/docs/4.0/components/buttons/.</p>
<p>[11] Mark Otto, "Buttons", Getbootstrap.com, 2019. [Online]. Available: https://getbootstrap.com/docs/4.0/components/buttons/. </p>
<p>[12] Mark Otto, "Forms", Getbootstrap.com, 2019. [Online]. Available: https://getbootstrap.com/docs/4.0/components/forms/.</p>
<p>[13] Mark Otto, "Forms", Getbootstrap.com, 2019. [Online]. Available: https://getbootstrap.com/docs/4.0/components/forms/.</p>

## Authors
- Dhruv Purohit, *B00821734*
- Yash Desai, *B00810560*
- MS Shehzeen, *B00812551*
- Nishant Bhambhani, *B00823348*
- Amirul Sunesara, *B00813456*
- Tirtha Modi, *B00826404*
