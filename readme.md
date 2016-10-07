# Framework branch:
adapt_framework - https://github.com/adaptlearning/adapt_framework/tree/feature/ml

# Plugin branches:
adapt-contrib-languagePicker - https://github.com/adaptlearning/adapt-contrib-languagepicker
adapt-contrib-spoor - https://github.com/adaptlearning/adapt-contrib-spoor/tree/feature/ml2
adapt-contrib-resources - https://github.com/adaptlearning/adapt-contrib-resources
adapt-contrib-glossary - https://github.com/adaptlearning/adapt-contrib-glossary/tree/feature/ml


# Testpackages requirements:
- include special chars
- translated aria labels
- assessment, with language specific assessment-id's
- include one rtl language

# Settings:
## f1:
spoor: installend and enabeled  
language-picker: installend and enabeled  
startcontroller: disabled  
resources: enabeled  
glossary: installed disabled  

## f2:
spoor: installend and disabled  
language-picker: installend and enabeled  
startcontroller: disabled  
resources: enabled  
glossary: installed disabled   

## f3:
spoor: not installend  
language-picker: installend and enabeled  
startcontroller: disabled  
resources: disabled  
glossary: enabled   

## f4:
spoor: installend and enabeled  
language-picker: enabled and showOnCourseLoad:false  
startcontroller: disabled  
resources: enabled  
glossary: installed disabled   

## f5:
spoor: installend and enabeled  
language-picker: enabled  
startcontroller: enabled
  de -> co-05
  en -> co-10
  he -> co-15
resources: enabled  
glossary: installed enableed   

## f6:
spoor: installend and enabeled  
language-picker: installend and disabled  
startcontroller: enabled
  de -> co-05
  en -> co-10
  he -> co-15
resources: enabeled  
glossary: installed and enabled  