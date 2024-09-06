<template>
  <div ref="chartContainer"></div>
</template>

<script>
import Highcharts from 'highcharts';
import exportingOption from 'highcharts/modules/exporting';
import { colorPalettes } from './colorPalettes'; // Importer les palettes de couleurs

exportingOption(Highcharts);


export default {
  props: {
    content: { type: Object, required: true },
  },

  data() {
    return {
      chartInstance: null, // Store chart instance here
    };
  },

  computed: {

    selectedPalette() {
      return colorPalettes[this.content.colorPalette] || colorPalettes.metabase; // Définit la palette par défaut si aucune sélection
    },

    chartOptions() {
      
      return {

        colors: this.selectedPalette, // Utiliser la palette sélectionnée
          
        chart: {
          type: 'pie',
          backgroundColor:'transparent',


        },

        exporting:{
          enabled: this.content.exportingEnabled,
          buttons: {
                contextButton: {
                    menuItems: ['viewFullscreen','separator','downloadPNG', 'downloadPDF','downloadSVG', ]
                },
              }
        },

        title: {
          text: null
        },

        xAxis: {
          categories: this.content.categories,
        },

        yAxis: {
          title:null,
        },

        tooltip: {
          pointFormat: this.content.tooltipFormat, 
        },

        legend: {
          enabled:this.content.legendEnabled,
          layout: this.content.legendLayout,
          align: this.content.legendAlign,
          verticalAlign: this.content.legendVerticalAlign,
          floating: false,
          y: this.content.legendY,
          itemDistance: this.content.legendDistance, 
          labelFormat: this.content.legendFormat,
          itemStyle: {"color": "#1C1C1C", "cursor": "pointer", "fontSize": "0.8em", "fontWeight": "500", "textOverflow": "ellipsis"},
        },

        plotOptions: {

            pie: {
              innerSize: this.content.donutEnabled ? this.content.donutRadius : null,
              
              animation: {
                duration: this.content.animationDuration, // Variable pour la durée de l'animation
              },


              dataLabels: {
                enabled: this.content.dataLabelsEnabled, // Variable pour activer/désactiver les étiquettes
                format: this.content.dataLabelsFormat, // Variable pour le format des étiquettes
                align: this.content.dataLabelsAlign, 
                inside: this.content.dataLabelsInside, 
                style: {
                    fontWeight: '500',
                    fontSize:'0.8em'
                },
                distance: this.content.dataLabelsDistance,
                rotation: this.content.dataLabelsRotation,

              },

              showInLegend: this.content.legendEnabled,

              startAngle: -90,
              endAngle: this.content.angle,
              centerInCategory: true, 

            }
        },

        // series: this.content.series

        series: [{
          name: 'Spend Share',
          data: [26.1, 25.293, 15.0, 14.0, 7.8, 3.2, 1.6, 1.5, 1.2, 0.8, 0.6, 3.0], // Données pour Spend Share
        }]
        
      };
    },
  },

  watch: {
    chartOptions: {
      handler() {
        this.createChart();
      },
      deep: true, // Ensure it watches nested objects
    },
  },

  mounted() {
    this.createChart();
  },

  methods: {
    createChart() {
      if (this.chartInstance) {
        this.chartInstance.destroy(); // Destroy the existing chart before re-creating it
      }
      this.chartInstance = Highcharts.chart(this.$refs.chartContainer, this.chartOptions);
    },
  },
};
</script>

<style scoped>

* {
    font-family: 'Inter', sans-serif;
}


</style>
