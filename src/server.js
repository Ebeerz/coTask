const getWelcomeMessage = async () => {
    const requestOptions = {
      method: "GET",
      headers: {
        "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Im1ha3MtbGFwdGV2LjAzQG1haWwucnUiLCJmdWxsbmFtZSI6Ik1ha3MgTGFwdGV2IiwicG9zaXRpb24iOiJEZXYiLCJ0ZWFtIjoiXHUwNDIxXHUwNDM1XHUwNDNjXHUwNDRjXHUwNDRmU2FtcGxlMURPVTg2IiwiaWQiOjJ9.PvtfP9OWaIpcA3-Jzinqt1AfjEyvyVkN9FKYvCrZllQ",
        "Content-Type": "application/json",
      },
    };
    const response = await fetch("http://192.168.3.50:8000/api/data/roadmap?project_name=Sample1", requestOptions);
    const data = await response.json();
    console.log(data);
    if (!response.ok){
      console.log("something messed up");
    } else {
      return(data);
    }
};

export default getWelcomeMessage
