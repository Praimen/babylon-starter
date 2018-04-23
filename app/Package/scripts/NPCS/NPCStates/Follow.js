export default class Follow{
  constructor(target){
    this.target = target
    init()
  }

  init(){
    console.log('I am now following ', this.target)
  }
}