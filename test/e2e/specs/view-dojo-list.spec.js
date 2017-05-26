const DojoPage = require('../page-objects/find-dojo');

describe('The dojo list', () => {
  it('should list all the dojos', () => {
    DojoPage.open();
    const dojosList = DojoPage.dojoListItems;
    expect(dojosList.length).to.equal(3);
    expect(dojosList[0].getText()).to.have.string('CD ROM');
    expect(dojosList[0].getText()).to.have.string('Private');
    expect(dojosList[1].getText()).to.have.string('Smithfield Awesome Dojo');
    expect(dojosList[1].getText()).to.have.string('Public');
    expect(dojosList[2].getText()).to.have.string('Dublin Ninja Kids');
    expect(dojosList[2].getText()).to.have.string('Private');
  });
});
