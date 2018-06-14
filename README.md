[![Build Status](https://travis-ci.org/Kostecki/MEGAPanel.svg?branch=master)](https://travis-ci.org/Kostecki/MEGAPanel)

[https://mega.re](https://mega.re)


## API
***GET**: /getlit   
**POST**: /chooseLights*
```
{
  animation: string,
  brightness: double/float,
  color: {
    r: int,
    g: int,
    b: int,
    a: double/float
  },
  controller: boolean
}
```

***GET**: /statzNow   
**POST**: /newStatz*
```
{
  avg: {
    down: float,
    up: float
  },
  lastSeven: {
    monday: {
      0: float
      1: float
      2: float
      3: float
      4: float
      5: float
      6: float
      7: float
      8: float
      9: float
      10: float
      11: float
      12: float
      13: float
      14: float
      15: float
      16: float
      17: float
      18: float
      19: float
      20: float
      21: float
      22: float
      23: float
    },
    tuesday: {...},
    wednesday: {...},
    thursday: {...},
    friday: {...},
    saturday: {...},
    sunday: {...}
  }
}
```

***GET**: /currentWatt   
**POST**: /newWatt*
```
{
  voltage: float
}
```