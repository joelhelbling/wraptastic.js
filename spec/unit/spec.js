
describe 'Wraptastic'
  describe 'initializing'
    it 'should accept a lineLength'
      -{ new Wraptastic(60) }.should.not.throw_error
    end
    it 'should throw an error unless a lineLength is passed'
      -{ new Wraptastic() }.should.throw_error
    end

    it 'line length should be persisted'
      (new Wraptastic(60)).lineLength.should.eql(60)
    end

    it 'should throw an error if lineLength is not a number'
      -{ new Wraptastic('foo') }.should.throw_error
    end

    describe 'wrapping a string with a lineLength of 60'
      it 'should return the whole string if shorter than lineLength'
        wrapper = new Wraptastic(60)
        theString = "123456789 123456789 1234567890"
        wrapper.wrap(theString).should.eql [theString]
      end
    end

    describe 'wrapping a string with a lineLength of 3'

      before_each
        wrapper = new Wraptastic(3)
      end

      it 'abc def should wrap every 3 characters'
        wrapper.wrap("abc def").should.eql ["abc", "def"]
      end

      it 'abcdef should wrap every 3 characters'
        wrapper.wrap("abcdef").should.eql ["abc", "def"]
      end
    end
  end
end
