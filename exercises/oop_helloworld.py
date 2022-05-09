# create your class here
class Car:
    #instance attributes
    def __init__(self, Model, Speed):
        self.model = Model
        self.speed = Speed 

    #instance method
    def getModel(self):
        return self.model
    def setSpeed(self, newSpeed):
        self.speed = newSpeed

if __name__ == '__main__':
    bmw = Car('BMW', 30.3)
    print(bmw.getModel(), bmw.speed)
    bmw.setSpeed(65)
    print(bmw.getModel(), bmw.speed)