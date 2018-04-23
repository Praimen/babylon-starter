export default class Hunt{
  constructor(target){
    this.target = target
    init()
  }

  init(){
    console.log('I am now guarding ', this.target)
  }
}