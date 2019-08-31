# Cloud_Computing_Project

# TEAM 2 - BOOM

## Project Description

<p>Four webservices and three front-ends are simulating real world interdependence between Mortagage broker, employer, real estate company and insurance company. These components are interconnected via Azure Cloud logic app and the performance of the application is enhanced by customizing load balancers and auto scaling features in azure cloud.</p>

<p>The flow of project begins with the Mortagage broker's (MBR) UI and web service. Firstly, the customer will enter his details on the MBR portal and then MBR’s web service will be invoked to store the detail of the customer. Now, to check the mortgage application status customer can login in broker portal and can check the application status. Then after, the customer will login into the Employer’s portal, here the employer’s web service will be invoked to authenticate the employee(customer) of the respective company. Afterwards, the employee(customer) will fill in the form to send details to the MBR. Employer’s web service will be invoked, and details of the employee will be sent to the MBR’s portal. In addition, session and tokens are generated on all portals of the project.</p>
<p>Consequently, the Customer will login into the Real Estate’s Portal and submit the request for the Appraisal, here the Real Estate’s (RE) web service will be invoked to authenticate the customer and generate the appraisal request. Also, session and tokens will be generated. Then after, the Appraiser will login into the Real Estate’s Portal to approve and enter the appraisal value to the request generated by the customer. Once the appraiser will approve the request, the emails will be sent to the customer regarding his request, these emails are triggered and sent using the Azure logic application i.e. workflows implemented on Microsoft Azure. Also, in this scenario, once the value is entered and request is approved by the appraiser, the value will be sent to the Insurance Web Service, which will compute the total value, where it will also deduct the cost and sent the computed value to the MBR’s Web Service.</p>
<p>Finally, the customer will be able to check his application status and amount value on MBR’s portal. Here the value is sent by the Insurance Web Service. Also, the application status will be changed to approved. </p>

<p>Technologies used: Sails.js, JQuery and MySQL.</p>

## Authors

- Dhruv Purohit, _B00821734_
- Yash Desai, _B00810560_
- MS Shehzeen, _B00812551_
- Nishant Bhambhani, _B00823348_
- Amirul Sunesara, _B00813456_
- Tirtha Modi, _B00826404_
