class Element:
    def __init__(self, valeur, suivant = None) :
        self.valeur = valeur
        self.suivant = suivant

class Liste():
    def __init__(self) :
        self.premier_element = None
        self.premier_element = None
        

    def add(valeur_element):
        element = Element(valeur_element)

        if premier_element == None :
            premier_element = element
        else :
            premier_element.suivant = element


        
ma_liste = Liste()

ma_liste.add(42)
ma_liste.add(12)
ma_liste.add(9)

