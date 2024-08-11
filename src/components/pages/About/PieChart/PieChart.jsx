import { PieChart, pieArcLabelClasses } from "@mui/x-charts/PieChart";
import { useMediaQuery } from "@uidotdev/usehooks";
import './PieChart.css'



const PieCharts = ({pie}) => {
  const data = pie.data;

  const isSmallDevice = useMediaQuery("only screen and (max-width : 400px)");

  const size = {
    // width: 725,
    height: 400,
  };

  return (
    <div className="chart-container">
      <h3>{pie.title}</h3>
      <PieChart
        tooltip={false}
        margin={{ bottom: 100 }}
        series={[
          {
            highlightScope: { faded: "global", highlighted: "item" },
            faded: { innerRadius: 30, additionalRadius: -30, color: "gray" },
            arcLabel: (item) => `${item.value}%`,
            arcLabelMinAngle: 5,
            data,
          },
        ]}
        // {...size}
        height={400}
        slotProps={{
          legend: {
            direction: 'column',
            position: { vertical: 'bottom', horizontal: `${isSmallDevice ? 'left' : 'middle'}` },
            padding: 0,
            labelStyle: {
              fontSize: 12
            }
          },
        }}
        sx={{
          [`& .${pieArcLabelClasses.root}`]: {
            fill: 'white',
            fontWeight: 'bold',
          },
        }}
  
      />
    </div>
  );
};

export default PieCharts;
