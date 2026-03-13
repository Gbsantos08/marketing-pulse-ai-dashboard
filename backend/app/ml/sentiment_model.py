import torch
from transformers import AutoTokenizer, AutoModelForSequenceClassification
from torch.nn.functional import softmax

# Carrega um modelo pré-treinado para análise de sentimento (ex: BERTimbau para português)
# ou um modelo customizado que você treine.
# Para este exemplo, usaremos um modelo Hugging Face para demonstração.
# Você pode treinar o seu próprio modelo PyTorch com seus dados.

tokenizer = AutoTokenizer.from_pretrained("neuralmind/bert-base-portuguese-cased")
model = AutoModelForSequenceClassification.from_pretrained("neuralmind/bert-base-portuguese-cased", num_labels=3) # Assumindo 3 classes: negativo, neutro, positivo
# Carregue pesos de um modelo treinado por você, se tiver:
# model.load_state_dict(torch.load("path/to/your/sentiment_model.pth"))
model.eval() # Modo de avaliação

def predict_sentiment(text: str):
    inputs = tokenizer(text, return_tensors="pt", truncation=True, padding=True, max_length=512)
    with torch.no_grad():
        outputs = model(**inputs)
    logits = outputs.logits
    probabilities = softmax(logits, dim=1)[0]
    
    # Mapear os índices para rótulos de sentimento
    # Isso pode variar dependendo de como seu modelo foi treinado
    sentiment_labels = ["negative", "neutral", "positive"]
    predicted_class_id = probabilities.argmax().item()
    sentiment = sentiment_labels[predicted_class_id]
    score = probabilities[predicted_class_id].item()

    return sentiment, score

# Exemplo de uso:
# sentiment, score = predict_sentiment("Esta campanha é fantástica!")
# print(f"Sentimento: {sentiment}, Score: {score}")