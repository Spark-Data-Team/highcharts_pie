export default {

  editor: {
    label: {
      en: "Highcharts - Pie",
    },

    icon: 'https://cdn.weweb.io/designs/c55504b2-3c64-44db-8bc0-db0aab821079/sections/highcharts.svg?_wwcv=1725614333416',

    customStylePropertiesOrder:[
      [
        'colorPalette',
        'animationDuration',
      ],

      [
        'dataLabelsEnabled', 
        'dataLabelsFormat',
        'dataLabelsDistance',
        'dataLabelsRotation',
      ],

      [
        'legendEnabled',
        'legendFormat',
        'legendLayout',
        'legendAlign',
        'legendVerticalAlign',
        'legendY', 
        'legendDistance', 
      ], 

      [
        'tooltipFormat',
      ],
    ], 

    customSettingsPropertiesOrder:[
      [
        'legend',
        'seriesData', 
        'seriesName',
      ], 

      [
        'angle',      
        'donutEnabled',
        'donutRadius',
      ],

      [
        'exportingEnabled'
      ], 

    ]
  },

  

  properties: {

    legend: {
      label: 'Legend',
      type: 'Info',
      options: { text: 'Bind categories data' },
      section: 'settings',
      bindable: "list",
      responsive: true,
      states: true,
      defaultValue: null,
      /* wwEditor:start */
      bindingValidation: {
          type: 'array',
          tooltip: 'A collection of data in array format: `[{"Meta"}, {"Google"}], ...]`',
      },
      /* wwEditor:end */
    },

    seriesData: {
      label: 'Data',
      type: 'Info',
      options: { text: 'Bind series data' },
      section: 'settings',
      bindable: "list",
      responsive: true,
      states: true,
      defaultValue: null,
      bindingValidation: {
        type: 'array',
        tooltip: 'A collection of data in array format: `[{12}, {14.27},{45.18}], ...]`',
      },
    },

    tooltipFormat: {
      label: 'Tooltip format',
      type: 'TextSelect',
      options: {
        options: [
            { value: '{series.name}: <b>{point.y:,.2f}</b>', label: 'Classic' },
            { value: '{series.name}: <b>{point.y:,.2f}%</b>', label: '%' },
            { value: '{series.name}: <b>{point.y:,.2f}€</b>', label: '€' },
        ],
      },      
      bindable: true,
      responsive: true,
      defaultValue: '{series.name}: <b>{point.y:,.2f}</b>',
    },

    legendEnabled: {
      label: 'Enable Legend',
      type: 'OnOff',
      bindable: true,
      responsive: true,
      defaultValue: true,
    },

    legendLayout: {
      label: 'Layout',
      type: 'TextSelect',
      options: {
        options: [
          { value: 'horizontal', label: 'Horizontal' },
          { value: 'vertical', label: 'Vertical' }
        ],
      },
      bindable: true,
      responsive: true,
      defaultValue: 'horizontal',
      hidden: content => !content.legendEnabled,

    },
    
    legendAlign: {
      label: 'Align',
      type: 'TextSelect',
      options: {
        options: [
          { value: 'center', label: 'Center' },
          { value: 'left', label: 'Left' },
          { value: 'right', label: 'Right' }
        ],
      },
      section: 'layout_settings',
      bindable: true,
      responsive: true,
      defaultValue: 'center',
      hidden: content => !content.legendEnabled,
    },
    
    legendVerticalAlign: {
      label: 'Position',
      type: 'TextSelect',
      options: {
        options: [
          { value: 'top', label: 'Top' },
          { value: 'middle', label: 'Middle' },
          { value: 'bottom', label: 'Bottom' }
        ],
      },
      bindable: true,
      responsive: true,
      defaultValue: 'bottom',
      hidden: content => !content.legendEnabled,
    },
    
    legendY: {
      label: 'Y Offset',
      type: 'Number',
      options: { min: -100, max: 100, step: 1 },
      bindable: true,
      responsive: true,
      defaultValue: 10,
      hidden: content => !content.legendEnabled,
    },

    legendDistance: {
      label: 'Distance between',
      type: 'Number',
      options: { min:0, max: 500, step: 5 },
      bindable: true,
      responsive: true,
      defaultValue: 20,
      hidden: content => !content.legendEnabled,
    },

    legendFormat: {
      label: 'Format',
      type: 'TextSelect',
      options: {
        options: [
            { value: '{name}', label: 'Name' },
            { value: '{name} : {y:,.2f}%', label: 'Name + value %' },
            { value: '{name} : {y:,.2f}€', label: 'Name + value €' },
        ],
      },   
         
      bindable: true,
      responsive: true,
      defaultValue: '{name}',
    },
    
    
    animationDuration: {
      label: 'Animation Duration (ms)',
      type: 'Number',
      options: { min: 100, max: 5000, step: 100 },
      bindable: true,
      responsive: true,
      defaultValue: 1500,
    },
    
    dataLabelsEnabled: {
      label: 'Enable Labels',
      type: 'OnOff',
      bindable: true,
      responsive: true,
      defaultValue: true,
    },
    
    dataLabelsFormat: {
      type: 'Text',
      label: 'Format',
      type: 'TextSelect',
      options: {
        options: [
          { value: '{point.y:,.2f}', label: 'Classic' }, // Ajout des virgules pour les milliers
          { value: '{point.y:,.2f}%', label: '%' }, // Avec les virgules et pourcentage
          { value: '{point.y:,.2f}€', label: '€' }, // Avec les virgules et euro
        ],
      },      
      bindable: true,
      responsive: true,
      defaultValue: '{point.y:,.2f}',
      hidden: content => !content.dataLabelsEnabled,
    },

    dataLabelsDistance: {
      label: 'Distance',
      type: 'Length',
      options: {
          unitChoices: [{ value: 'px', label: 'px', min: -200, max: 200 }, { value: '%', label: '%', min: -200, max: 200 }],
      },
      defaultValue: '30px',
      bindable: true,
      responsive: true,
      states: true,
      classes: true,
      hidden: content => !content.dataLabelsEnabled,
    },

    dataLabelsRotation: {
      label: 'Rotation (deg°)',
      type: 'Number',
      options: { min: -360, max: 360, step: 15 },
      bindable: true,
      responsive: true,
      defaultValue: 0,
      hidden: content => !content.dataLabelsEnabled,
    },

    exportingEnabled: {
      label: 'Exporting',
      type: 'OnOff',
      section: 'settings',
      bindable: true,
      responsive: true,
      defaultValue: false,
    },

    colorPalette:{
      label: 'Color palette',
      type: 'TextSelect',
      options: {
        options: [
            { 
              value: 'metabase', 
              label: 'Metabase '
            },

            { 
              value: 'metabasePastel', 
              label: 'Metabase - pastel'
            },

            { 
              value: 'blue', 
              label: 'Blue'
            },

            { 
              value: 'pastel', 
              label: 'Pastel'
            },
            { 
              value: 'springPastel', 
              label: 'Spring Pastels'
            },
        ],
      },      
      bindable: true,
      responsive: true,
      defaultValue: 'metabase',
    },

    donutEnabled: {
      label: 'Donut',
      type: 'OnOff',
      bindable: true,
      responsive: true,
      defaultValue: false,
      section: 'settings',
    },


    donutRadius: {
      label: 'Radius',
      type: 'Length',
      options: {
          unitChoices: [{ value: '%', label: '%', min: 0, max: 100 }],
      },
      defaultValue: '50',
      bindable: true,
      responsive: true,
      states: true,
      classes: true,
      hidden: content => !content.donutEnabled,
      section: 'settings',
    },

    angle: {
      label: 'Angle (deg°)',
      type: 'Number',
      defaultValue: '360',
      options: { min: -0, max: 360, step: 15 },
      bindable: true,
      responsive: true,
      states: true,
      classes: true,
      section: 'settings',
    },

    seriesName:{
      label: "Data name",
      type: 'Text',
      defaultValue: 'Data',
      bindable: true,
      responsive: true,
      states: true,
      classes: true,
      section: 'settings',
      bindingValidation: {
          validations: [
              {
                  type: 'string',
              },
          ],
          tooltip: 'A string specifying the data name: `"CAC"`, `"CTR"`, `"Spend share"`',
      },
    },



  },

  
};
