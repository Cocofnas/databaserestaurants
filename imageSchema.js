const imageSchema = new Schema({
    restaurantId: { type: Schema.Types.ObjectId, ref: 'Restaurant' },
    images: [String]
  });
  
  const Image = mongoose.model('Image', imageSchema);
  