export const queryData = (data) => {
    console.log('Data', data)
    const ret = [];

    for(const d in data){
      // console.log(d)
      // console.log(data)
      let value = data[d];

      if(value) {
        // dibawah ini terpakai jika value nya object
        if (typeof value == 'object') {
          value = data[d].join(".")
        }
        // &status=${statusOrder.current.value} similar with below
        ret.push(`${encodeURIComponent(d)}=${encodeURIComponent(value)}`);
      }
    }
    console.log(ret);

    return ret.join("&");
  }