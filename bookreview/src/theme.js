import { createTheme } from "@mui/material";
const theme = createTheme({
    palette: {      
      primary: {
        main: '#FFFFFFFF',
        text: "#FFFFFFFF",
        border:"#FFFFFF",
        contrastText: "#fff"        
      },
      secondary:{
        main:'#7a85ee',
        backgroundColor: "#7a85ee",
        text:"#FFFFFF",
        
      },
      logout:{
        main:'#000000',
        backgroundColor: "#000000",
        text:"#FFFFFF",
      },
      Card: {
        main: "#F98C6BE5"
      },
      action:{
        main:'#EADDFF'
      },
      text:{
        main:'#001619',
        
      },
      success:{
        main:'#008080'
      },
      warning:{
        main:'#FFA700'
      },
      error:{
        main:"#C30000"
      },
      default:{
        main:"#fff"
      },
      hover: {
        main: "#F98C6B"
      },
      grey:{
        main:'#888'
      }
      
    },
    components:{
      dashboard:{
        titleColor:'#7A165B',
        saleCircleIcon:'#6FD195',
        rentCircleIcon:"#FFAE4C",
        saleCarCircleIcon:"#FFAE4C",
        inquiryOtherCircleIcon:"#ea615e",
        welcomeTextColor:"#AC2582",
        inquiryTitleColor:'#001619B2'
      }
    },

    typography:{ 
      "h4":{        
        fontWeight:'bold'
      } ,  
      "h6":{
        fontWeight:'bold'
      },
    },
    Stepper:{
      border:{
        main: '#ea625e'
      }
    },
    homePage:{
      navbar:'#FFFFFF',
      backgroundColor:'#e3e1f7'
    },
    mobileDrawer: {
      backgroundColor: "#fafafa"
    },
    button: {
      backgroundColor: {
        main: "#F98C6B"
      },
      textColor: {
        main: "#000000"
      }
    }
  });
  export default theme;