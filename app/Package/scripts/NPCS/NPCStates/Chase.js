export default class Chase{
  constructor(target){
    this.target = target
    init()
  }

  init(){
    console.log('I am now chasing ', this.target)
  }
}