export default class Guard{
  constructor(target){
    this.target = target

  }

  init(){
    console.log('I am now guarding ', this.target)
  }
}
