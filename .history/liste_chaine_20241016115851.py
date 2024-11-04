class Element:
    def __init__(self, valeur, suivant = None) :
        self.valeur = valeur
        self.suivant = suivant

class Liste():
    def __init__(self) :
        self.premier_element = None
        self.dernier_element = None
        
    def add(self, valeur_element):
        element = Element(valeur_element)

        if self.premier_element == None :
            self.premier_element = element
        else :
            self.dernier_element.suivant = element

        self.dernier_element = element


        
ma_liste = Liste()

ma_liste.add(42)
ma_liste.add(12)
ma_liste.add(9)

