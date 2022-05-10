class BitcoinTimestamp:
    # TODO: (5.2)
    def __init__(self, timestamp: str, price: float):
        self.timestamp = timestamp
        self.price = price

    def getTimestamp(self):
        return self.timestamp
    def getPrice(self):
        return self.price