public with sharing class CompanyHouse {

    @AuraEnabled(cacheable = true)
    public static String getCompany(String company){
        Http http = new Http();
        HttpRequest request = new HttpRequest();
        request.setEndpoint('https://api.company-information.service.gov.uk/search/companies?q='+company);
        request.setMethod('GET');
        request.setHeader('Authorization', '93f7c7b2-199e-426e-8ced-cf2ee43ac509');
        
        HttpResponse response = http.send(request);
        
        if(response.getStatusCode() == 200) {
            return response.getBody();
        }
        return '';
    }
    
    @AuraEnabled(cacheable = true)
    public static String getCompanyDetails(String details){
        Http http = new Http();
        HttpRequest request = new HttpRequest();
        request.setEndpoint('https://api.company-information.service.gov.uk/company/'+details);
        request.setMethod('GET');
        request.setHeader('Authorization', '93f7c7b2-199e-426e-8ced-cf2ee43ac509');
        
        HttpResponse response = http.send(request);
        
        System.debug('Response Code ' + response.getStatusCode());
        if(response.getStatusCode() == 200) {
            return response.getBody();
        }
        return '';
    }
}